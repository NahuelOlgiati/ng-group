import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'tiny-circle',
  templateUrl: './tiny-circle.component.html',
  styleUrls: ['./tiny-circle.component.scss']
})
export class TinyCircleComponent implements AfterViewInit {

  constructor() { }

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

    const $container = $('#rotatescroll'),
      opt = { interval: false, dotsSnap: true, dotsHide: false };

    const options = $.extend({}, defaults, opt),
      dots = [],
      $viewport = $container.find('.viewport'),
      $overview = $container.find('.overview'),
      $slides = $overview.children(),
      slidesTotal = $slides.length,
      $thumb = $container.find('.thumb'),
      $links = $slides.find('a'),
      containerSize = {
        width: $container.outerWidth(true),
        height: $container.outerHeight(true)
      },
      slideSize = {
        width: $slides.first().outerWidth(true),
        height: $slides.first().outerHeight(true)
      },
      thumbSize = {
        width: $thumb.outerWidth(true),
        height: $thumb.outerHeight(true)
      },
      touchEvents = 'ontouchstart' in window,
      hasRequestAnimationFrame = 'requestAnimationFrame' in window;

    $dots = $container.find('.dot');
    dotSize = {
      width: $dots.outerWidth(),
      height: $dots.outerHeight()
    };
    _defaults = defaults;
    _name = pluginName;

    const _toRadians = function (degrees: number) {
      return degrees * (Math.PI / 180);
    };

    const _setDots = function () {

      const docFragment = document.createDocumentFragment();

      $dots.remove();

      $slides.each(function (index, slide) {
        let $dotClone = null;
        const angle = parseInt($(slide).attr('data-degrees'), 10) || (index * 360 / slidesTotal),
          position = {
            top: -Math.cos(_toRadians(angle)) * options.radius + containerSize.height / 2 - dotSize.height / 2,
            left: Math.sin(_toRadians(angle)) * options.radius + containerSize.width / 2 - dotSize.width / 2
          };

        if ($dots.length > 0) {
          $dotClone = $dots.clone();
          $dotClone
            .addClass($(slide).attr('data-classname'))
            .css(position);

          docFragment.appendChild($dotClone[0]);
        }

        dots.push({
          'angle': angle
          , 'slide': slide
          , 'dot': $dotClone
        });
      });

      dots.sort(function (dotA, dotB) {
        return dotA.angle - dotB.angle;
      });

      $.each(dots, function (index, dot) {
        if ($(dot.dot).length > 0) {
          $(dot.dot)
            .addClass('dot-' + (index + 1))
            .attr('data-slide-index', index)
            .html('<span>' + (index + 1) + '</span>');
        }
      });

      $container.append(docFragment);

      $dots = $container.find('.dot');
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

    const _findShortestPath = function (angleA: number, angleB: number) {
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

    const _findClosestSlide = function (angle: number) {
      let closestDotAngleToAngleCCW = 9999,
        closestDotAngleToAngleCW = 9999,
        closestDotAngleToAngle = 9999,
        closestSlideCCW = 0,
        closestSlideCW = 0,
        closestSlide = 0;

      $.each(dots, function (index, dot) {
        const delta = _findShortestPath(dot.angle, angle);

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
      });

      return [
        [closestSlide, closestSlideCCW, closestSlideCW]
        , [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
      ];
    };

    const _setCSS = function (angle: number, fireCallback?: any) {
      const closestSlidesAndAngles = _findClosestSlide(angle);
      const closestSlides = closestSlidesAndAngles[0];
      const closestAngles = closestSlidesAndAngles[1];

      $overview.css('left', -(closestSlides[1] * slideSize.width + Math.abs(closestAngles[1]) * slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2]))));
      $thumb.css({
        top: -Math.cos(_toRadians(angle)) * options.radius + (containerSize.height / 2 - thumbSize.height / 2)
        , left: Math.sin(_toRadians(angle)) * options.radius + (containerSize.width / 2 - thumbSize.width / 2)
      });

      if (fireCallback) {
        // The move event will trigger when the carousel slides to a new slide.
        $container.trigger('move', [$slides[slideCurrent], slideCurrent]);
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
        angleDelta = _findShortestPath(angleDestination, angleCurrent)[0],
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
      console.log(event.target);
      console.log($(event.target));
      console.log($(event.target).hasClass('dot'));
      if ($(event.target).hasClass('dot')) {
        return false;
      }
      dragging = false;
      event.preventDefault();

      $(document).unbind('mousemove mouseup');
      $thumb.unbind('mouseup');

      if (options.dotsHide) {
        $dots.stop(true, true).fadeOut('slow');
      }

      if (options.dotsSnap) {
        move(_findClosestSlide(angleCurrent)[0][0]);
      }
    };

    const _drag = function (event) {
      const containerOffset = $container.offset(),
        thumbPositionNew = {
          left: _page(event).x - containerOffset.left - (containerSize.width / 2),
          top: _page(event).y - containerOffset.top - (containerSize.height / 2)
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

      if ($(event.target).hasClass('dot')) {
        return false;
      }

      stop();

      $(document).mousemove(_drag);
      $(document).mouseup(_endDrag);
      $thumb.mouseup(_endDrag);

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

      move($(this).attr('data-slide-index'));

      return false;
    };

    const _setEvents = function () {
      if (touchEvents) {
        $container[0].ontouchstart = _startDrag;
        $container[0].ontouchmove = _drag;
        $container[0].ontouchend = _endDrag;
      }

      $thumb.bind('mousedown', _startDrag);

      if (touchEvents) {
        $container.delegate('.dot', 'touchstart', snapHandler);
      }
      $container.delegate('.dot', 'mousedown', snapHandler);
    };

    const _initialize = function () {
      _setDots();

      $overview
        .append($slides.first().clone())
        .css('width', slideSize.width * ($slides.length + 1));

      _setEvents();

      _setCSS(0);
      move(options.start);

      return self;
    };

    _initialize();
  }

}
