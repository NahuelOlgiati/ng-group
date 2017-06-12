import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ng-tiny-circle',
  templateUrl: './ng-tiny-circle.component.html',
  styleUrls: ['./ng-tiny-circle.component.scss']
})
export class NgTinyCircleComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {

    let _defaults: any,
      _name: string,
      slideCurrent = 0,
      angleCurrent = 0,
      intervalActive = false,
      intervalTimer = null,
      animationTimer = null,
      dragging = false,
      isTouchEvent = false,
      $dots: any,
      dotSize: any;

    const pluginName = 'tinycircleslider',
      defaults = {
        interval: false,
        intervalTime: 3500,
        dotsSnap: false,
        dotsHide: true,
        radius: 140,
        start: 0
      };

    const tinyCircle = this.el.nativeElement.querySelector('.tiny-circle'),
      opt = { interval: false, dotsSnap: true, dotsHide: false };

    const options = Object.assign(defaults, opt),
      dots = [],
      $viewport = tinyCircle.querySelector('.viewport'),
      $overview = tinyCircle.querySelector('.overview'),
      $slides = $overview.querySelectorAll('li'),
      slidesTotal = $slides.length,
      $thumb = tinyCircle.querySelector('.thumb'),
      $links = $overview.querySelectorAll('a'),
      containerSize = {
        width: tinyCircle.offsetWidth,
        height: tinyCircle.offsetHeight
      },
      slideSize = {
        width: $slides[0].offsetWidth,
        height: $slides[0].offsetHeight
      },
      thumbSize = {
        width: $thumb.offsetWidth,
        height: $thumb.offsetHeight
      },
      touchEvents = 'ontouchstart' in window,
      hasRequestAnimationFrame = 'requestAnimationFrame' in window;

    $dots = tinyCircle.querySelectorAll('.dot');
    const dotComputedStyle = window.getComputedStyle($dots[0], null);
    dotSize = {
      width: parseInt(dotComputedStyle.getPropertyValue('width'), 10),
      height: parseInt(dotComputedStyle.getPropertyValue('height'), 10)
    };
    _defaults = defaults;
    _name = pluginName;

    const _toRadians = function (degrees: number) {
      return degrees * (Math.PI / 180);
    };

    const _setDots = function () {

      const docFragment = document.createDocumentFragment();

      $dots[0].remove();

      for (let index = 0; index < $slides.length; index++) {
        const slide = $slides[index];
        let $dotClone = null;

        const angle = index * 360 / slidesTotal,
          position = {
            top: -Math.cos(_toRadians(angle)) * options.radius + containerSize.height / 2 - dotSize.height / 2,
            left: Math.sin(_toRadians(angle)) * options.radius + containerSize.width / 2 - dotSize.width / 2
          };

        if ($dots) {
          $dotClone = $dots[0].cloneNode(true);
          $dotClone.style.top = position.top + 'px';
          $dotClone.style.left = position.left + 'px';
          docFragment.appendChild($dotClone);
        }

        dots.push({
          'angle': angle
          , 'slide': slide
          , 'dot': $dotClone
        });
      }

      dots.sort(function (dotA, dotB) {
        return dotA.angle - dotB.angle;
      });

      for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];

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

      tinyCircle.appendChild(docFragment);

      $dots = tinyCircle.querySelectorAll('.dot');
    };

    const stop = function () {
      intervalActive = false;

      clearTimeout(intervalTimer);

      return self;
    };

    const _page = function (event) {
      return {
        x: isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
        y: isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
      };
    };

    const _sanitizeAngle = function (degrees: number) {
      return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
    };

    const _toDegrees = function (radians: number) {
      return radians * 180 / Math.PI;
    };

    const _querySelectorShortestPath = function (angleA: number, angleB: number) {
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

    const _querySelectorClosestSlide = function (angle: number) {
      let closestDotAngleToAngleCCW = 9999,
        closestDotAngleToAngleCW = 9999,
        closestDotAngleToAngle = 9999,
        closestSlideCCW = 0,
        closestSlideCW = 0,
        closestSlide = 0;

      for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        const delta = _querySelectorShortestPath(dot.angle, angle);

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

    const _setCSS = function (angle: number, fireCallback?: boolean) {
      const closestSlidesAndAngles = _querySelectorClosestSlide(angle);
      const closestSlides = closestSlidesAndAngles[0];
      const closestAngles = closestSlidesAndAngles[1];

      $overview.style.left = (-(closestSlides[1] * slideSize.width + Math.abs(closestAngles[1]) * slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2])))) + 'px';
      $thumb.style.top = -Math.cos(_toRadians(angle)) * options.radius + (containerSize.height / 2 - thumbSize.height / 2) + 'px';
      $thumb.style.left = Math.sin(_toRadians(angle)) * options.radius + (containerSize.width / 2 - thumbSize.width / 2) + 'px';

      if (fireCallback) {
        // The move event will trigger when the carousel slides to a new slide.
        //tinyCircle.dispatchEvent('move', [$slides[slideCurrent], slideCurrent]);
      }
    };

    const _stepMove = function (angleStep: number, angleDelta: number, stepInterval: number) {
      let angleStepNew = angleStep,
        endAnimation = false;

      if (Math.abs(angleStep) > Math.abs(angleDelta)) {
        angleStepNew = -angleDelta;
        endAnimation = true;
      } else if (hasRequestAnimationFrame) {
        requestAnimationFrame(function () {
          _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
        });
      } else {
        animationTimer = setTimeout(function () {
          _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
        }, stepInterval);
      }

      angleCurrent = _sanitizeAngle(angleCurrent - angleStepNew);

      _setCSS(angleCurrent, endAnimation);
    };

    const start = function (first: number) {
      if (options.interval) {
        intervalActive = true;
        _setTimer(first);
      }
      return self;
    };

    const move = function (index: number) {
      let slideIndex = Math.max(0, isNaN(index) ? slideCurrent : index);

      if (slideIndex >= slidesTotal) {
        slideIndex = 0;
      }

      const angleDestination = dots[slideIndex] && dots[slideIndex].angle,
        angleDelta = _querySelectorShortestPath(angleDestination, angleCurrent)[0],
        angleStep = angleDelta > 0 ? -2 : 2;

      slideCurrent = slideIndex;
      _stepMove(angleStep, angleDelta, 50);

      start(0);

      return self;
    };

    const _setTimer = function (slideFirst: number) {
      intervalTimer = setTimeout(function () {
        move(slideCurrent + 1);
      }, (slideFirst ? 50 : options.intervalTime));
    };

    const _endDrag = function (event) {
      if (event.target.classList.contains('dot')) {
        return false;
      }
      dragging = false;
      event.preventDefault();

      document.removeEventListener('mousemove');
      document.removeEventListener('mouseup');
      $thumb.removeEventListener('mouseup');

      if (options.dotsHide) {
        $dots.stop(true, true).fadeOut('slow');
      }

      if (options.dotsSnap) {
        move(_querySelectorClosestSlide(angleCurrent)[0][0]);
      }
    };

    const _drag = function (event) {
      const thumbPositionNew = {
        left: _page(event).x - tinyCircle.style.left - (containerSize.width / 2),
        top: _page(event).y - tinyCircle.style.top - (containerSize.height / 2)
      };

      angleCurrent = _sanitizeAngle(
        _toDegrees(
          Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)
        )
      );

      if (!hasRequestAnimationFrame) {
        _setCSS(angleCurrent);
      }

      return false;
    };

    const _dragAnimationLoop = function () {
      if (dragging) {
        _setCSS(angleCurrent);
        requestAnimationFrame(function () {
          _dragAnimationLoop();
        });
      }
    };

    const _startDrag = function (event) {
      event.preventDefault();
      isTouchEvent = event.type == 'touchstart';
      dragging = true;

      if (event.target.classList.contains('dot')) {
        return false;
      }

      stop();

      document.addEventListener('mousemove', _drag);
      document.addEventListener('mouseup', _endDrag);
      $thumb.addEventListener('mouseup', _endDrag);

      if (options.dotsHide) {
        $dots.stop(true, true).fadeIn('slow');
      }

      if (hasRequestAnimationFrame) {
        _dragAnimationLoop();
      }
    };

    const snapHandler = function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      stop();

      move(event.target.getAttribute('data-slide-index'));

      return false;
    };

    const _setEvents = function () {
      if (touchEvents) {
        tinyCircle.ontouchstart = _startDrag;
        tinyCircle.ontouchmove = _drag;
        tinyCircle.ontouchend = _endDrag;
      }

      $thumb.addEventListener('mousedown', _startDrag);

      if (touchEvents) {
        for (let index = 0; index < dots.length; index++) {
          dots[index].dot.addEventListener('touchstart', snapHandler);
        }
      }
      for (let index = 0; index < dots.length; index++) {
        dots[index].dot.addEventListener('mousedown', snapHandler);
      }
    };

    const _initialize = function () {

      _setDots();

      const clone = $slides[0].cloneNode(true);
      $overview.appendChild(clone);
      $overview.style.width = slideSize.width * ($slides.length + 1) + 'px';

      _setEvents();

      _setCSS(0);
      move(options.start);

      return self;
    };

    _initialize();
  }

}
