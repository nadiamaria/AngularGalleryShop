import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/products/models/products.models';
import { FormFieldTypeEnum, GenericFormConfiguration } from 'src/app/shared/modules/forms/models/forms.models';

import { EventBusService } from '../../../shared/services/event-bus.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit, OnDestroy {

  @Input() product;
  @Output() addClick = new EventEmitter();
  public products: Product[] = [];
  public quantityConfig: GenericFormConfiguration;
  private quantitySubscription: Subscription = new Subscription();
  public cartProducts = [];

  constructor(private eventBus: EventBusService, private formBuilder: FormBuilder) {
  }

  public onRemoveProduct(id: number): void {
    if (localStorage.getItem('products') === null) {
    } else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }
    const index = this.products.indexOf(this.products.find(x => x.id === id));
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));

    this.addClick.emit();
    this.eventBus.emit({ name: 'cartNumberToggleEvent', value: id });
  }

  ngOnInit(): void {
    this.quantityConfig = new GenericFormConfiguration(
      this.formBuilder,
      'MyQuantity',
      [{
        formFieldId: 'quantity',
        type: FormFieldTypeEnum.Input,
        inputType: 'number',
        validations: [],
        title: 'Quantity',
        placeholder: 'quantity',
        classList: 'class2',
        value: this.product.quantity
      }]);

    this.quantityConfig.formGroup.controls['quantity'].setValue(this.product.quantity);

    this.quantitySubscription.add(this.quantityConfig.formGroup.valueChanges.subscribe(value => {
      if (localStorage.getItem('products') !== null) {
        this.cartProducts = JSON.parse(localStorage.getItem('products'));
        const index = this.cartProducts.indexOf(this.cartProducts.find(x => x.id === this.product.id));
        if (index !== -1) {
          this.cartProducts[index].quantity = parseInt(this.quantityConfig.formGroup.controls['quantity'].value);
          localStorage.setItem('products', JSON.stringify(this.cartProducts));
        }
      }
      this.eventBus.emit({ name: 'cartNumberToggleEvent', value: this.product.id });

      if (parseInt(this.quantityConfig.formGroup.controls['quantity'].value) === 0) {
        this.onRemoveProduct(this.product.id);
      }
    }));
  }

  public ngOnDestroy(): void {
    this.quantitySubscription.unsubscribe();
  }

  // ProductsService
  // public getProducts(): Produt[] {

  // }
  // getProcuctById(product: number): Product{

  // }
}
