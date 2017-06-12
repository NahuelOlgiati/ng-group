import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ong-tiny-circle',
  templateUrl: './ong-tiny-circle.component.html',
  styleUrls: ['./ong-tiny-circle.component.scss']
})
export class OngTinyCircleComponent implements AfterViewInit {

  defaults = {
    interval: false,
    intervalTime: 3500,
    dotsSnap: false,
    dotsHide: true,
    radius: 140,
    start: 0
  };

  options: any; // defaults + conf

  state = {
    slideCurrent: 0,
    angleCurrent: 0,
    intervalActive: false,
    intervalTimer: null,
    animationTimer: null,
    dragging: false,
    isTouchEvent: false,
    $dots: null,
    dotSize: null
  };

  dom = {
    tinyCircle: null,
    dots: null,
    $viewport: null,
    $overview: null,
    $slides: null,
    slidesTotal: null,
    $thumb: null,
    $links: null,
    containerSize: null,
    slideSize: null,
    thumbSize: null,
    touchEvents: null,
    hasRequestAnimationFrame: null
  };

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {

    this.options = Object.assign(this.defaults, { interval: false, dotsSnap: true, dotsHide: false });

    this.dom.tinyCircle = this.el.nativeElement.querySelector('.tiny-circle')
    this.dom.dots = [];
    this.dom.$viewport = this.dom.tinyCircle.querySelector('.viewport');
    this.dom.$overview = this.dom.tinyCircle.querySelector('.overview');
    this.dom.$slides = this.dom.$overview.querySelectorAll('li');
    this.dom.slidesTotal = this.dom.$slides.length;
    this.dom.$thumb = this.dom.tinyCircle.querySelector('.thumb');
    this.dom.$links = this.dom.$overview.querySelectorAll('a');
    this.dom.containerSize = {
      width: this.dom.tinyCircle.offsetWidth,
      height: this.dom.tinyCircle.offsetHeight
    };
    this.dom.slideSize = {
      width: this.dom.$slides[0].offsetWidth,
      height: this.dom.$slides[0].offsetHeight
    };
    this.dom.thumbSize = {
      width: this.dom.$thumb.offsetWidth,
      height: this.dom.$thumb.offsetHeight
    };
    this.dom.touchEvents = 'ontouchstart' in window;
    this.dom.hasRequestAnimationFrame = 'requestAnimationFrame' in window;

    this.state.$dots = this.dom.tinyCircle.querySelectorAll('.dot');
    const dotComputedStyle = window.getComputedStyle(this.state.$dots[0], null);
    this.state.dotSize = {
      width: parseInt(dotComputedStyle.getPropertyValue('width'), 10),
      height: parseInt(dotComputedStyle.getPropertyValue('height'), 10)
    };

    this._initialize();
  }

  private _toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  };

  private _setDots(): void {

    const docFragment = document.createDocumentFragment();

    this.state.$dots[0].remove();

    for (let index = 0; index < this.dom.$slides.length; index++) {
      const slide = this.dom.$slides[index];
      let $dotClone = null;

      const angle = index * 360 / this.dom.slidesTotal,
        position = {
          top: -Math.cos(this._toRadians(angle)) * this.options.radius + this.dom.containerSize.height / 2 - this.state.dotSize.height / 2,
          left: Math.sin(this._toRadians(angle)) * this.options.radius + this.dom.containerSize.width / 2 - this.state.dotSize.width / 2
        };

      if (this.state.$dots) {
        $dotClone = this.state.$dots[0].cloneNode(true);
        $dotClone.style.top = position.top + 'px';
        $dotClone.style.left = position.left + 'px';
        docFragment.appendChild($dotClone);
      }

      this.dom.dots.push({
        'angle': angle
        , 'slide': slide
        , 'dot': $dotClone
      });
    }

    this.dom.dots.sort((dotA, dotB) => {
      return dotA.angle - dotB.angle;
    });

    for (let index = 0; index < this.dom.dots.length; index++) {
      const dot = this.dom.dots[index];

      if (dot.dot) {
        dot.dot.classList.add('dot-' + (index + 1));
        const att: any = document.createAttribute('data-slide-index');
        att.value = index;
        dot.dot.setAttributeNode(att);
        const span: any = document.createElement('span');
        span.innerHTML = index + 1;
        dot.dot.appendChild(span);
      }
    }

    this.dom.tinyCircle.appendChild(docFragment);

    this.state.$dots = this.dom.tinyCircle.querySelectorAll('.dot');
  };

  private stop(): void {
    this.state.intervalActive = false;
    clearTimeout(this.state.intervalTimer);
  };

  private _page(event): any {
    return {
      x: this.state.isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
      y: this.state.isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
    };
  };

  private _sanitizeAngle(degrees: number): number {
    return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
  };

  private _toDegrees(radians: number): number {
    return radians * 180 / Math.PI;
  };

  private _querySelectorShortestPath(angleA: number, angleB: number): any {
    let angleCW, angleCCW, angleShortest;

    if (angleA > angleB) {
      angleCW = angleA - angleB;
      angleCCW = -(angleB + 360 - angleA);
    } else {
      angleCW = angleA + 360 - angleB;
      angleCCW = -(angleB - angleA);
    }

    angleShortest = angleCW < Math.abs(angleCCW) ? angleCW : angleCCW;

    return [angleShortest, angleCCW, angleCW];
  };

  private _querySelectorClosestSlide(angle: number): any {
    let closestDotAngleToAngleCCW = 9999,
      closestDotAngleToAngleCW = 9999,
      closestDotAngleToAngle = 9999,
      closestSlideCCW = 0,
      closestSlideCW = 0,
      closestSlide = 0;

    for (let index = 0; index < this.dom.dots.length; index++) {
      const dot = this.dom.dots[index];
      const delta = this._querySelectorShortestPath(dot.angle, angle);

      if (Math.abs(delta[0]) < Math.abs(closestDotAngleToAngle)) {
        closestDotAngleToAngle = delta[0];
        closestSlide = index;
      }

      if (Math.abs(delta[1]) < Math.abs(closestDotAngleToAngleCCW)) {
        closestDotAngleToAngleCCW = delta[1];
        closestSlideCCW = index;
      }

      if (Math.abs(delta[2]) < Math.abs(closestDotAngleToAngleCW)) {
        closestDotAngleToAngleCW = delta[2];
        closestSlideCW = index;
      }
    }

    return [
      [closestSlide, closestSlideCCW, closestSlideCW],
      [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
    ];
  };

  private _setCSS(angle: number, fireCallback?: boolean): void {
    const closestSlidesAndAngles = this._querySelectorClosestSlide(angle);
    const closestSlides = closestSlidesAndAngles[0];
    const closestAngles = closestSlidesAndAngles[1];

    this.dom.$overview.style.left = (-(closestSlides[1] * this.dom.slideSize.width + Math.abs(closestAngles[1]) * this.dom.slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2])))) + 'px';
    this.dom.$thumb.style.top = -Math.cos(this._toRadians(angle)) * this.options.radius + (this.dom.containerSize.height / 2 - this.dom.thumbSize.height / 2) + 'px';
    this.dom.$thumb.style.left = Math.sin(this._toRadians(angle)) * this.options.radius + (this.dom.containerSize.width / 2 - this.dom.thumbSize.width / 2) + 'px';

    if (fireCallback) {
      // The move event will trigger when the carousel slides to a new slide.
      //tinyCircle.dispatchEvent('move', [$slides[slideCurrent], slideCurrent]);
    }
  };

  private _stepMove(angleStep: number, angleDelta: number, stepInterval: number): void {
    let angleStepNew = angleStep,
      endAnimation = false;

    if (Math.abs(angleStep) > Math.abs(angleDelta)) {
      angleStepNew = -angleDelta;
      endAnimation = true;
    } else if (this.dom.hasRequestAnimationFrame) {
      requestAnimationFrame(() => {
        this._stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
      });
    } else {
      this.state.animationTimer = setTimeout(() => {
        this._stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
      }, stepInterval);
    }

    this.state.angleCurrent = this._sanitizeAngle(this.state.angleCurrent - angleStepNew);

    this._setCSS(this.state.angleCurrent, endAnimation);
  };

  private start(first: number): void {
    if (this.options.interval) {
      this.state.intervalActive = true;
      this._setTimer(first);
    }
  };

  private move(index: number): void {
    let slideIndex = Math.max(0, isNaN(index) ? this.state.slideCurrent : index);

    if (slideIndex >= this.dom.slidesTotal) {
      slideIndex = 0;
    }

    const angleDestination = this.dom.dots[slideIndex] && this.dom.dots[slideIndex].angle,
      angleDelta = this._querySelectorShortestPath(angleDestination, this.state.angleCurrent)[0],
      angleStep = angleDelta > 0 ? -2 : 2;

    this.state.slideCurrent = slideIndex;
    this._stepMove(angleStep, angleDelta, 50);

    this.start(0);
  };

  private _setTimer(slideFirst: number): void {
    this.state.intervalTimer = setTimeout(() => {
      this.move(this.state.slideCurrent + 1);
    }, (slideFirst ? 50 : this.options.intervalTime));
  };

  private _endDrag(event: any, self: any): boolean {
    if (event.target.classList.contains('dot')) {
      return false;
    }
    self.state.dragging = false;
    event.preventDefault();

    document.removeEventListener('mousemove');
    document.removeEventListener('mouseup');
    self.dom.$thumb.removeEventListener('mouseup');

    if (self.options.dotsHide) {
      self.state.$dots.stop(true, true).fadeOut('slow');
    }

    if (self.options.dotsSnap) {
      self.move(self._querySelectorClosestSlide(self.state.angleCurrent)[0][0]);
    }
  };

  private _drag(event: any, self: any): boolean {
    const containerOffset = self.dom.tinyCircle.getBoundingClientRect(),
      thumbPositionNew = {
        left: self._page(event).x - containerOffset.left - (self.dom.containerSize.width / 2),
        top: self._page(event).y - containerOffset.top - (self.dom.containerSize.height / 2)
      };

    self.state.angleCurrent = self._sanitizeAngle(self._toDegrees(Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)));

    if (!self.dom.hasRequestAnimationFrame) {
      self._setCSS(self.state.angleCurrent);
    }

    return false;
  };

  private _dragAnimationLoop(): void {
    if (this.state.dragging) {
      this._setCSS(this.state.angleCurrent);
      requestAnimationFrame(() => {
        this._dragAnimationLoop();
      });
    }
  };

  private _startDrag(event: any, self: any): boolean {
    event.preventDefault();

    self.state.isTouchEvent = event.type == 'touchstart';
    self.state.dragging = true;

    if (event.target.classList.contains('dot')) {
      return false;
    }

    self.stop();

    document.addEventListener('mousemove', (e) => { self._drag(e, self); });
    document.addEventListener('mouseup', (e) => { self._endDrag(e, self); });
    self.dom.$thumb.addEventListener('mouseup', (e) => { self._endDrag(e, self); });

    if (self.options.dotsHide) {
      self.state.$dots.stop(true, true).fadeIn('slow');
    }

    if (self.dom.hasRequestAnimationFrame) {
      self._dragAnimationLoop();
    }
  };

  private snapHandler(event: any, self: any): boolean {
    event.preventDefault();
    event.stopImmediatePropagation();

    self.stop();

    self.move(event.target.getAttribute('data-slide-index'));

    return false;
  };

  private _setEvents(): void {

    this.dom.$thumb.addEventListener('mousedown', (e) => { this._startDrag(e, this); });
    for (let index = 0; index < this.dom.dots.length; index++) {
      this.dom.dots[index].dot.addEventListener('mousedown', (e) => { this.snapHandler(e, this); });
    }

    if (this.dom.touchEvents) {
      this.dom.tinyCircle.addEventListener('ontouchstart', (e) => { this._startDrag(e, this); });
      this.dom.tinyCircle.addEventListener('ontouchmove', (e) => { this._drag(e, this); });
      this.dom.tinyCircle.addEventListener('ontouchend', (e) => { this._endDrag(e, this); });
      for (let index = 0; index < this.dom.dots.length; index++) {
        this.dom.dots[index].dot.addEventListener('touchstart', (e) => { this.snapHandler(e, this); });
      }
    }
  };

  private _initialize(): void {

    this._setDots();

    const clone = this.dom.$slides[0].cloneNode(true);
    this.dom.$overview.appendChild(clone);
    this.dom.$overview.style.width = this.dom.slideSize.width * (this.dom.$slides.length + 1) + 'px';

    this._setEvents();
    this._setCSS(0);
    this.move(this.options.start);

  };

}
