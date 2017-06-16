import { Component, AfterViewInit, ElementRef } from '@angular/core';

class ItemStyle {
  constructor(public left: string, public top: string, public width: string, public opacity: string) { }
}
class People {
  constructor(public name: string, public style?: ItemStyle) { }
}
class Group {
  constructor(public name: string, public peoples: People[]) { }
}
@Component({
  selector: 'ong-fiends-circle',
  templateUrl: './ong-fiends-circle.component.html',
  styleUrls: ['./ong-fiends-circle.component.scss']
})
export class OngFiendsCircleComponent implements AfterViewInit {

  private conf = {
    radius: 60,
    center: null,
    groupItemWidth: 22,
    itemsPerGroup: 10
  };
  private peoples: People[] = [];
  private groups: Group[] = [new Group('Friends', []), new Group('Family', []), new Group('Private', [])];

  constructor(private el: ElementRef) {
    this.peoples.push(new People('Blue Shoes'));
    this.peoples.push(new People('Good Jacket'));
    this.peoples.push(new People('Red Shirt'));
    this.peoples.push(new People('Blue Jeans'));
  }

  ngAfterViewInit(): void {
    const offsetWidth = this.el.nativeElement.querySelector('.circle-drop').offsetWidth;
    const offsetHeight = this.el.nativeElement.querySelector('.circle-drop').offsetHeight;
    const centerX = (offsetWidth / 2) - (this.conf.groupItemWidth / 2);
    const centerY = (offsetHeight / 2) - (this.conf.groupItemWidth / 2);
    this.conf.center = [centerX, centerY];
  }

  private addPeople($event: any, groupName: string): void {
    const peopleDraged: People = $event.dragData;
    for (const group of this.groups) {
      if (group.name == groupName) {
        const coord = this.coord(group.peoples.length + 1);
        const style = { left: coord.x, top: coord.y, width: this.conf.groupItemWidth + 'px', opacity: '1' };
        group.peoples.push(new People(peopleDraged.name, style));
      }
    }
  }

  private coord(count: number): any {
    const itemAngle = 360 / this.conf.itemsPerGroup;
    const a = (-180 + count * itemAngle) * Math.PI / 180; // to radians
    const x = (Math.sin(a) * this.conf.radius + this.conf.center[0]).toPrecision(4) + 'px';
    const y = (Math.cos(a) * this.conf.radius + this.conf.center[1]).toPrecision(4) + 'px';
    return { x: x, y: y };
  }

  private getGroupsNames(): string[] {
    return this.groups.map((group) => { return group.name; });
  }
}
