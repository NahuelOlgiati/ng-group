import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ng-group',
  templateUrl: './ng-group.component.html',
  styleUrls: ['./ng-group.component.scss']
})
export class NgGroupComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {

    // Vars
    const selectedClass = 'ui-state-highlight',
      clickDelay = 600, // milliseconds
      ngContentID = this.el.nativeElement.firstChild.attributes[0].name;
    let outside = 0;
    let outsideCircle = 0;
    let lastClick, diffClick; // timestamps

    // Functions
    const clickFunction = function () {
      $('.circle-list-ul > .circle-card')
        .on('mousedown mouseup', function (e) {
          if (e.type == 'mousedown') {
            lastClick = e.timeStamp; // get mousedown time
          } else {
            diffClick = e.timeStamp - lastClick;
            if (diffClick < clickDelay) {
              $(this).toggleClass(selectedClass);
            }
          }
        });
    };

    const move = function (count, $elem, speed, turns) {
      const $circle = $elem;
      const end = 180 - 360 * (turns - 1); // make the circle appear in a circular movement
      $circle
        .animate({
          path: new $.path.arc({
            center: [39, 39],
            radius: 40,
            start: 180,
            end: -180 + count * 35,
            dir: -1
          }),
          opacity: '1'
        }, speed);
    };

    const deleteImage = function ($item, data) {
      const $trash = $(data);

      $item.each(function () {
        const subitem = $(this);
        subitem.fadeOut(function () {
          const $list = $('ul', $trash).length ?
            $('ul', $trash) :
            $("<ul " + ngContentID + " class='circle-drop-item ui-helper-reset clearfix'/>")
              .appendTo($trash);
          console.log($list);
          subitem.appendTo($list).fadeIn(function () {
            subitem.animate({
              width: '22px',
              position: 'absolute'
            })
              .find('img')
              .animate({ height: '22px' });
          });
        });

        subitem.draggable({
          appendTo: '.content',
          helper: 'clone',
          start: function (e, ui) {
            outside = 0;
            const folderName = (ui.helper).data('id');
            const parentClass = $(ui.helper).parents('li.circle-popover');
            if (parentClass.has('#' + folderName)) {
              $(ui.helper).find('.draggable-tooltip').remove();
            } else {
              $(ui.helper).find('.draggable-tooltip').remove();
              $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip'></span>"));
            }
          },
          drag: function (e, ui) {
            outside = 0;
          },
          stop: function (event, ui) {
            const folderName = (ui.helper).data('id');
            const parentClass = $(ui.helper).parents('li.circle-popover').attr('id');
            if (outside == 0 && outsideCircle == 0) {
              $(this).parents('li.circle-popover').find('.dorp-action.delete')
                .animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, function () {
                  $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
                });
              const dropItmeList = $(this).parents('li.circle-popover').find('.circle-drop-item li').length;
              $(this).parents('li.circle-popover').find('.members').text(dropItmeList - 1);
              $(this).remove();
            }
          },
          cursorAt: { left: 25 }
        });
        const liLength = $trash.find('ul li').length;

        if (liLength > 10) {
          subitem.css({
            display: 'none'
          });
        }
        move(liLength, subitem, 1500, 1);
        subitem.attr('data-id', subitem.parents('li.circle-popover').attr('id'));
      });

    };

    const recycleImage = function ($item, data) {
      $item.fadeOut(function () {
        $item
          .appendTo('.circle-list-ul')
          .fadeIn(function () {
            $item
              .removeAttr('style').addClass('left-drop-card').removeClass('dingdon')
              .find('img')
              .removeAttr('style');
          });
      });
      $item.draggable({
        helper: 'clone',
        revertDuration: 10, // grouped items animate separately, so leave this number low
        containment: '.demo',
        start: function (e, ui) {
          outside = 0;
          ui.helper.addClass(selectedClass);
        },
        stop: function (e, ui) {
          // reset group positions
          $('.' + selectedClass)
            .css({
              top: 0,
              left: 0
            })
            .removeClass(selectedClass);
        },
        drag: function (e, ui) {
          // set selected group position to main dragged object
          // this works because the position is relative to the starting position
          $('.' + selectedClass)
            .css({
              top: ui.position.top,
              left: ui.position.left
            });
        }
      });
    };

    // Main
    clickFunction();

    $('.close-btn').click(function () {
      $(this).parents('li').fadeOut();
    });

    // Items to drag
    $('.circle-list-ul > .circle-card').draggable({
      cursor: 'move',
      helper: 'clone',
      distance: 15,
      grid: [50, 20],
      iframeFix: true,
      start: function (e, ui) {
        console.log('circle-card START');
        ui.helper.addClass(selectedClass);
      },
      stop: function (e, ui) {
        console.log('circle-card STOP');
        // reset group positions
        $('.' + selectedClass).css({
          top: 0,
          left: 0
        }).removeClass(selectedClass);
      },
      drag: function (e, ui) {
        console.log('circle-card DRAG');
        // set selected group position to main dragged object
        // this works because the position is relative to the starting position
        $('.' + selectedClass).css({
          top: ui.position.top,
          left: ui.position.left
        });
      }
    });

/*
    $('.circle-list-ul').droppable({
      greedy: true,
      hoverClass: 'data-hover',
      accept: '.circle-drop-item > .circle-card',
      over: function (event, ui) {
        console.log('circle-list-ul OVER');
        const folderName = $(event.target).attr('id');
        const targetFolder = $(event.target).attr('id');
        const parentClass = $(ui.helper).parents('li');
        $(ui.helper).find('.draggable-tooltip').remove();
        $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip'></span>"));
      },
      out: function (event, ui) {
        console.log('circle-list-ul OUT');
        $(ui.helper).find('.draggable-tooltip').remove();
        $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip delete'></span>"));
      },
      drop: function (event, ui) {
        console.log('circle-list-ul DROP');
        const cloneItem = $(ui.draggable).clone().on('mousedown mouseup', function (e) {
          if (e.type == 'mousedown') {
            lastClick = e.timeStamp; // get mousedown time
          } else {
            diffClick = e.timeStamp - lastClick;
            if (diffClick < clickDelay) {

              // add selected class to group draggable objects
              $(this).toggleClass(selectedClass);
            }
          }
        });
        recycleImage(cloneItem, this);
        outside = 1;
      }
    });
    */

    // Circles to drag the items
    $('.circle-drop').droppable({
      greedy: true,
      tolerance: 'pointer',
      hoverClass: 'drop-hover',
      over: function (event, ui) {
        console.log('circle-drop OVER');
        outsideCircle = 1;
        $(ui.helper).find('.draggable-tooltip').remove();
      },
      drop: function (event, ui) {
        console.log('circle-drop DROP');
        let cloneItem;
        if ($('.' + selectedClass).length == 1) {
          cloneItem = $('.' + selectedClass)
            .removeClass('left-drop-card ui-draggable-dragging draggable' + selectedClass)
            .addClass('dingdon')
            .css({
              position: '',
              top: 0,
              left: 0
            }).clone();
        } else {
          cloneItem = $('.' + selectedClass + ':not(.ui-draggable-dragging)')
            .removeClass('left-drop-card draggable' + selectedClass)
            .addClass('dingdon')
            .css({
              position: '',
              top: 0,
              left: 0
            }).clone();
        }
        deleteImage(cloneItem, this);
        const dropItmeList = $(this).find('.circle-drop-item li').length;
        $(this).find('.members').text(dropItmeList);
        if (cloneItem.hasClass(selectedClass)) {
          $(this).find('.dorp-action.add-new').text(cloneItem.length);
          $(this).find('.dorp-action.add-new').animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, function () {
            $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
          });
        }
      },
      out: function (event, ui) {
        console.log('circle-drop OUT');
        outsideCircle = 0;
        if (!$(ui.helper).hasClass('left-drop-card')) {
          $(ui.helper).find('.draggable-tooltip').remove();
          $(ui.helper).find('.circle-bdr').append($("<span " + ngContentID + " class='draggable-tooltip delete'></span>"));
        }
      }
    });

  }

}
