import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

declare var $: any;

@Component({
  selector: 'ng-fiends-circle',
  templateUrl: './ng-fiends-circle.component.html',
  styleUrls: ['./ng-fiends-circle.component.scss']
})
export class NgFiendsCircleComponent implements AfterViewInit {

  private items: Array<string> = [];
  private circles: Array<string> = [];

  private selectedClass = 'ui-state-highlight';
  private clickDelay = 600; // milliseconds
  private ngContentID: any;
  private outside = 0;
  private outsideCircle = 0;
  private lastClick: any;
  private diffClick: any; // timestamps

  constructor(private dragulaService: DragulaService, private el: ElementRef) {
    this.items.push('Jaun');
    this.items.push('Alberto');
    this.items.push('Badía');
    this.items.push('Hugo');
    this.items.push('Pereira');

    this.circles.push('Family');
    this.circles.push('Friends');
    this.circles.push('Private');

    dragulaService.setOptions('main-bag', {
      isContainer: function (el) {
        console.log('isContainer');
        return false; // only elements in drake.containers will be taken into account
      },
      moves: function (el, source, handle, sibling) {
        console.log('moves');
        //return el.classList.contains('circle-card'); // elements are always draggable by default
        return true;
      },
      accepts: function (el, target, source, sibling) {
        console.log('accepts');
        //return target.classList.contains('circle-drop'); // elements can be dropped in any of the `containers` by default
        return true;
      },
      invalid: function (el, handle) {
        console.log('invalid');
        return false; // don't prevent any drags from initiating by default
      },
      copy: function (el, source) {
        // To copy only elements in left container, the right container can still be sorted
        return source.id === 'left';
      },
      copySortSource: false
    });

    dragulaService.drop.subscribe((value: any) => {
      console.log('onDrop');
      console.log(value);
      this.onDrop(value.slice(1));
    });
  }

  private onDrop(args: any): void {
    let [el, target, source] = args;
    console.log('ALBERTO');

    console.log(el);
    console.log(target);
    console.log(source);

    // TODO IF

    let cloneItem;
    if ($('.' + this.selectedClass).length == 1) {
      cloneItem = $('.' + this.selectedClass)
        .removeClass('left-drop-card ui-draggable-dragging draggable' + this.selectedClass)
        .addClass('dingdon')
        .css({
          position: '',
          top: 0,
          left: 0
        }).clone();
    } else {
      cloneItem = $('.' + this.selectedClass + ':not(.ui-draggable-dragging)')
        .removeClass('left-drop-card draggable' + this.selectedClass)
        .addClass('dingdon')
        .css({
          position: '',
          top: 0,
          left: 0
        }).clone();
    }
    this.deleteImage(cloneItem, this);
    const dropItmeList = $(this).find('.circle-drop-item li').length;
    $(this).find('.members').text(dropItmeList);
    if (cloneItem.hasClass(this.selectedClass)) {
      $(this).find('.dorp-action.add-new').text(cloneItem.length);
      $(this).find('.dorp-action.add-new').animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, () => {
        $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
      });
    }

  }

  ngAfterViewInit() {
    this.ngContentID = this.el.nativeElement.firstChild.attributes[0].name;
    this.clickFunction();
  }

  private clickFunction(): void {
    $('.circle-list-ul > .circle-card')
      .on('mousedown mouseup', function (e) {
        if (e.type == 'mousedown') {
          this.lastClick = e.timeStamp; // get mousedown time
        } else {
          this.diffClick = e.timeStamp - this.lastClick;
          if (this.diffClick < this.clickDelay) {
            $(this).toggleClass(this.selectedClass);
          }
        }
      });
  };

  private move(count, $elem) {

    const radius = 40;
    const center = [39, 39];
    const a = (-180 + count * 35) * 3.1415927 / 180; // to radians

    const x = (Math.sin(a) * radius + center[0]).toPrecision(4) + 'px';
    const y = (Math.cos(a) * radius + center[1]).toPrecision(4) + 'px';

    $elem.css({
      top: x,
      left: y,
      opacity: 1
    });
  };

  private deleteImage($item, data) {
    const $trash = $(data);

    $item.each(() => {
      const subitem = $(this);
      subitem.fadeOut(() => {
        const $list = $('ul', $trash).length ?
          $('ul', $trash) :
          $("<ul " + this.ngContentID + " class='circle-drop-item ui-helper-reset clearfix'/>")
            .appendTo($trash);
        console.log($list);
        subitem.appendTo($list).fadeIn(() => {
          subitem.animate({
            width: '22px',
            position: 'absolute'
          })
            .find('img')
            .animate({ height: '22px' });
        });
      });

      /*
            subitem.draggable({
              appendTo: '.content',
              helper: 'clone',
              start: function (e, ui) {
                this.outside = 0;
                const folderName = (ui.helper).data('id');
                const parentClass = $(ui.helper).parents('li.circle-popover');
                if (parentClass.has('#' + folderName)) {
                  $(ui.helper).find('.draggable-tooltip').remove();
                } else {
                  $(ui.helper).find('.draggable-tooltip').remove();
                  $(ui.helper).find('.circle-bdr').append($("<span " + this.ngContentID + " class='draggable-tooltip'></span>"));
                }
              },
              drag: function (e, ui) {
                this.outside = 0;
              },
              stop: function (event, ui) {
                const folderName = (ui.helper).data('id');
                const parentClass = $(ui.helper).parents('li.circle-popover').attr('id');
                if (this.outside == 0 && this.outsideCircle == 0) {
                  $(this).parents('li.circle-popover').find('.dorp-action.delete')
                    .animate({ 'margin-top': '-25px', 'opacity': '1' }, 450, () => {
                      $(this).animate({ 'margin-top': '0px', 'opacity': '0' }, 450);
                    });
                  const dropItmeList = $(this).parents('li.circle-popover').find('.circle-drop-item li').length;
                  $(this).parents('li.circle-popover').find('.members').text(dropItmeList - 1);
                  $(this).remove();
                }
              },
              cursorAt: { left: 25 }
            });
      */

      const liLength = $trash.find('ul li').length;

      if (liLength > 10) {
        subitem.css({
          display: 'none'
        });
      }
      this.move(liLength, subitem);
      subitem.attr('data-id', subitem.parents('li.circle-popover').attr('id'));
    });

  };

  private recycleImage($item, data) {
    $item.fadeOut(() => {
      $item
        .appendTo('.circle-list-ul')
        .fadeIn(() => {
          $item
            .removeAttr('style').addClass('left-drop-card').removeClass('dingdon')
            .find('img')
            .removeAttr('style');
        });
    });

    /*
        $item.draggable({
          helper: 'clone',
          revertDuration: 10, // grouped items animate separately, so leave this number low
          containment: '.demo',
          start: function (e, ui) {
            this.outside = 0;
            ui.helper.addClass(this.selectedClass);
          },
          stop: function (e, ui) {
            // reset group positions
            $('.' + this.selectedClass)
              .css({
                top: 0,
                left: 0
              })
              .removeClass(this.selectedClass);
          },
          drag: function (e, ui) {
            // set selected group position to main dragged object
            // this works because the position is relative to the starting position
            $('.' + this.selectedClass)
              .css({
                top: ui.position.top,
                left: ui.position.left
              });
          }
        });
    */
  };

}
