import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'drag-demo',
  templateUrl: './drag-demo.component.html',
  styleUrls: ['./drag-demo.component.scss']
})
export class DragDemoComponent {

  private origin: Array<string> = [];
  private target: Array<string> = [];

  public constructor(private dragulaService: DragulaService) {
    this.origin.push('AAA');
    this.origin.push('BBB');
    this.origin.push('CCC');
    this.origin.push('DDD');
    this.origin.push('EEE');

    this.target.push('FFF');
    this.target.push('GGG');

    dragulaService.setOptions('second-bag', {
      removeOnSpill: true,
      copy: true
    });

    dragulaService.drag.subscribe((value: any) => {
      console.log('onDrag');
      console.log(value);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value: any) => {
      console.log('onDrop');
      console.log(value);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value: any) => {
      console.log('onOver');
      console.log(value);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value: any) => {
      console.log('onOut');
      console.log(value);
      this.onOut(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value: any) => {
      console.log('removeModel');
      console.log(value);
      this.onRemoveModel(value.slice(1));
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
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
    this.addClass(el, 'ex-moved');
  }

  private onOver(args: any): void {
    let [el] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args: any): void {
    let [el] = args;
    this.removeClass(el, 'ex-over');
  }

  private onRemoveModel(args: any): void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }
}
