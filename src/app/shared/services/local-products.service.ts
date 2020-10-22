import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class LocalProductsService {
  private products: Product[] = [];
  // public getLocalProducts() : Product{
  //   this.products = JSON.parse(localStorage.getItem('products'));
  //   return this.products;
  // }

}
