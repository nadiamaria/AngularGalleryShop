import { Component, Input, OnInit } from '@angular/core';

import { EventBusService } from '../../../shared/services/event-bus.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  public cartProducts = [ ];

  constructor(private eventBus: EventBusService) { }

  public onAddProduct(id: number): void {
    if (localStorage.getItem('products') === null){
      this.product.quantity ++;
      this.cartProducts.push(this.product);
      localStorage.setItem('products', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts = JSON.parse(localStorage.getItem('products'));
      const index = this.cartProducts.indexOf(this.cartProducts.find(x => x.id === id));
      if (index !== -1) {
        this.cartProducts[index].quantity ++;
        localStorage.setItem('products', JSON.stringify(this.cartProducts));
      } else {
        this.product.quantity ++;
        this.cartProducts.push(this.product);
        localStorage.setItem('products', JSON.stringify(this.cartProducts));
      }
    }

    this.eventBus.emit({ name: 'cartNumberToggleEvent', value: id });
  }

  ngOnInit(): void {
  }

}
