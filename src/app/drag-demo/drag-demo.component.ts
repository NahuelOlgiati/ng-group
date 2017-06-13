import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'drag-demo',
  templateUrl: './drag-demo.component.html',
  styleUrls: ['./drag-demo.component.scss']
})
export class DragDemoComponent {
  public constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value: any) => {
      // console.log(`drag: ${value[0]}`); // value[0] will always be bag name
      console.log('onDrag');
      console.log(value);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value: any) => {
      // console.log(`drop: ${value[0]}`);
      console.log('onDrop');
      console.log(value);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value: any) => {
      // console.log(`over: ${value[0]}`);
      console.log('onOver');
      console.log(value);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value: any) => {
      // console.log(`out: ${value[0]}`);
      console.log('onOut');
      console.log(value);
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args: any): void {
    let [e] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args: any): void {
    let [e] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args: any): void {
    let [el] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args: any): void {
    let [el] = args;
    this.removeClass(el, 'ex-over');
  }
}