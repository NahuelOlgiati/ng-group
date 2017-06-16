import { Component } from '@angular/core';

class LiStyle {
  constructor(public left: string, public top: string, public width: string, public opacity: string) { }
}
class Product {
  constructor(public name: string, public quantity: number, public cost: number, public style: LiStyle) { }
}

@Component({
  selector: 'ong-fiends-circle',
  templateUrl: './ong-fiends-circle.component.html',
  styleUrls: ['./ong-fiends-circle.component.scss']
})
export class OngFiendsCircleComponent {
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product> = [];
  circles = ['Friends', 'Family', 'Private'];

  private count = 0;

  constructor() {
    this.availableProducts.push(new Product('Blue Shoes', 3, 35, null));
    this.availableProducts.push(new Product('Good Jacket', 1, 90, null));
    this.availableProducts.push(new Product('Red Shirt', 5, 12, null));
    this.availableProducts.push(new Product('Blue Jeans', 4, 60, null));
  }

  orderedProduct($event: any) {
    let orderedProduct: Product = $event.dragData;
    orderedProduct.quantity--;
  }

  addToBasket($event: any) {
    console.log($event);

    let newProduct: Product = $event.dragData;

    this.count++;
    const coord = this.coord(this.count);
    const style = {left: coord.x, top: coord.y, width: '22px', opacity: '1'};
    //left: 16.0569px; top: 6.23392px; width: 22px; opacity: 1;

    this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost, style));
    this.shoppingBasket.sort((a: Product, b: Product) => {
      return a.name.localeCompare(b.name);
    });
  }

  private coord(count: number): any {
    const radius = 40;
    const center = [39, 39];
    const a = (-180 + count * 35) * 3.1415927 / 180; // to radians

    const x = (Math.sin(a) * radius + center[0]).toPrecision(4) + 'px';
    const y = (Math.cos(a) * radius + center[1]).toPrecision(4) + 'px';
    return { x: x, y: y };
  }

  totalCost(): number {
    let cost: number = 0;
    for (let indx in this.shoppingBasket) {
      let product: Product = this.shoppingBasket[indx];
      cost += (product.cost * product.quantity);
    }
    return cost;
  }
}
