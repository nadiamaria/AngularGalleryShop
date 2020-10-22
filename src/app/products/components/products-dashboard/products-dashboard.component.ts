import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/products.models';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
  public products: Product[] = [
    {
      id: 1,
      name: 'Bird1',
      image: 'https://i.imgur.com/zfOPmnI.jpg',
      price: 300,
      type: {
        dimension: 'Small 12x16',
        technique: 'acrylic',
        type: 'others'
      },
      description: 'I painted a bird. He"s not super smart, but he"s kinda cuddly.',
      new: true,
      quantity: 0
    },
    {
      id: 2,
      name: 'Bird2',
      image: 'https://i.imgur.com/zfOPmnI.jpg',
      price: 300,
      type: {
        dimension: 'Small 12x16',
        technique: 'acrylic',
        type: 'others'
      },
      description: 'I painted a bird. He"s not super smart, but he"s kinda cuddly.',
      new: true,
      quantity: 0
    },
    {
      id: 3,
      name: 'Bird3',
      image: 'https://i.imgur.com/zfOPmnI.jpg',
      price: 300,
      type: {
        dimension: 'Small 12x16',
        technique: 'acrylic',
        type: 'others'
      },
      description: 'I painted a bird. He"s not super smart, but he"s kinda cuddly.',
      new: true,
      quantity: 0
    },
    {
      id: 4,
      name: 'Bird4',
      image: 'https://i.imgur.com/zfOPmnI.jpg',
      price: 300,
      type: {
        dimension: 'Small 12x16',
        technique: 'acrylic',
        type: 'others'
      },
      description: 'I painted a bird. He"s not super smart, but he"s kinda cuddly.',
      new: true,
      quantity: 0
    },
    {
      id: 5,
      name: 'Bird5',
      image: 'https://i.imgur.com/zfOPmnI.jpg',
      price: 300,
      type: {
        dimension: 'Small 12x16',
        technique: 'acrylic',
        type: 'others'
      },
      description: 'I painted a bird. He"s not super smart, but he"s kinda cuddly.',
      new: true,
      quantity: 0
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
