import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hex-image',
  template: `
<div [ngStyle]="getHexImageStyle()"
     [style.background-image]="getImage()">
  <div [ngStyle]="getTopStyle()">
    <div [ngStyle]="getTopAfterStyle()"></div>
  </div>
  <div [ngStyle]="getBottomStyle()">
    <div [ngStyle]="getBottomAfterStyle()"></div>
  </div>
  <div [ngStyle]="getHexImageAfterStyle()"></div>
</div>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HexImageComponent {

  @Input() private width = 300;
  @Input() private src = 'http://csshexagon.com/img/meow.jpg';
  private scaleFactor = Math.tan(30 * Math.PI / 180); // for transform square into a rhombus for the top

  constructor(private domSanitizer: DomSanitizer) {
  }

  private getImage(): any {
    return this.domSanitizer.bypassSecurityTrustStyle('url(' + this.src + ')');
  }

  private getHexImageStyle(): any {
    return {
      'position': 'relative',
      'width.px': this.width,
      'height.px': this.width / Math.sqrt(3),
      'margin': ((this.width / Math.sqrt(3)) / 2) + 'px 0',
      'background-size': 'auto ' + this.width / Math.sqrt(3) * 2 + 'px',
      'background-position': 'center'
    };
  }

  private getHexImageAfterStyle(): any {
    return {
      'content': '',
      'position': 'absolute',
      'top.px': 0,
      'left.px': 0,
      'width.px': this.width,
      'height.px': this.width / Math.sqrt(3),
      'z-index': 2,
      'background': 'inherit'
    };
  }

  private getTopBottomStyle(): any {
    return {
      'position': 'absolute',
      'z-index': 1,
      'width.px': this.width / Math.sqrt(2),
      'height.px': this.width / Math.sqrt(2),
      'overflow': 'hidden',
      '-webkit-transform': 'scaleY(' + this.scaleFactor + ') rotate(-45deg)',
      '-ms-transform': 'scaleY(' + this.scaleFactor + ') rotate(-45deg)',
      'transform': 'scaleY(' + this.scaleFactor + ') rotate(-45deg)',
      'background': 'inherit',
      'left.px': (this.width - (this.width / Math.sqrt(2))) / 2
    };
  }

  private getTopBottomAfterStyle(): any {
    return {
      'content': '',
      'position': 'absolute',
      'width.px': this.width,
      'height.px': this.width / Math.sqrt(3),
      '-webkit-transform': 'rotate(45deg) scaleY(' + 1 / this.scaleFactor + ') translateY(' + -this.width / Math.sqrt(3) / 2 + 'px)',
      '-ms-transform': 'rotate(45deg) scaleY(' + 1 / this.scaleFactor + ') translateY(' + -this.width / Math.sqrt(3) / 2 + 'px)',
      'transform': 'rotate(45deg) scaleY(' + 1 / this.scaleFactor + ') translateY(' + -this.width / Math.sqrt(3) / 2 + 'px)',
      '-webkit-transform-origin': '0 0',
      '-ms-transform-origin': '0 0',
      'transform-origin': '0 0',
      'background': 'inherit',
    };
  }

  private getTopStyle(): any {
    return Object.assign(this.getTopBottomStyle(), { 'top.px': -this.width / Math.sqrt(2) / 2 });
  }

  private getTopAfterStyle(): any {
    return Object.assign(this.getTopBottomAfterStyle(), { 'background-position': 'center top' });
  }

  private getBottomStyle(): any {
    return Object.assign(this.getTopBottomStyle(), { 'bottom.px': -this.width / Math.sqrt(2) / 2 });
  }

  private getBottomAfterStyle(): any {
    return Object.assign(this.getTopBottomAfterStyle(), { 'background-position': 'center bottom' });
  }
}
