import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { GenericFormsModule } from './../shared/modules/forms/forms.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartDashboardComponent } from './components/cart-dashboard/cart-dashboard.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [CartDashboardComponent, CartItemComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    GenericFormsModule
  ]
})
export class CartModule { }
