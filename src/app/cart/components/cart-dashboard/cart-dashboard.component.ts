import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../../../products/models/products.models';


@Component({
  selector: 'app-cart-dashboard',
  templateUrl: './cart-dashboard.component.html',
  styleUrls: ['./cart-dashboard.component.scss']
})

export class CartDashboardComponent implements OnInit {
  public cartObservable: Subject<string> = new Subject<string>();
  public products: Product[] = [];

  constructor() {
    this.cartObservable.subscribe(val => { });
  }

  public refreshOnClick(): void {
    if (localStorage.getItem('products') === null) {
    } else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('products') === null) {
    } else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }
  }
}

export interface CartElement {
  image: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
}

const ELEMENT_DATA: CartElement[] = [
  { image: 'https://i.imgur.com/zfOPmnI.jpg', name: 'Bird', size: '30x60cm', price: 300, quantity: 1 },
  { image: 'https://i.imgur.com/zfOPmnI.jpg', name: 'Bird', size: '30x60cm', price: 300, quantity: 1 }
];
