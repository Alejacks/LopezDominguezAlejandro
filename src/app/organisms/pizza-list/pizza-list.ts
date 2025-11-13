// src/app/organisms/pizza-list/pizza-list.ts
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pizza } from '../../models/pizza.model';
import { PizzaCardComponent } from '../../components/pizza-card/pizza-card';

@Component({
  selector: 'app-pizza-list',
  imports: [CommonModule, PizzaCardComponent],
  templateUrl: './pizza-list.html'
})
export class PizzaListComponent {
  pizzas = input.required<Pizza[]>();
  orderPizza = output<{ pizza: Pizza, quantity: number }>();
}