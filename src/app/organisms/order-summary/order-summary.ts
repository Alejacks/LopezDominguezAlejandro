// src/app/organisms/order-summary/order-summary.ts
import { Component, input, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartItemComponent, CartItemDisplay } from '../../molecules/cart-item/cart-item';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule, CartItemComponent, CurrencyPipe],
  templateUrl: './order-summary.html'
})
export class OrderSummaryComponent {
  cartItems = input.required<CartItemDisplay[]>();
  
  // Computado para calcular el total
  cartTotal = computed(() => this.cartItems().reduce((sum, item) => sum + item.subtotal, 0));
}