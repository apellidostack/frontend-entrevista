import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Order } from '../../models/order.model';
import { CurrencyPipe } from '@angular/common';
import { FoodListComponent } from "../../components/food-list/food-list.component";

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CurrencyPipe, FoodListComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})
export class OrderPageComponent {
  order!: Order;

  constructor(private foodService: FoodService) {}

  
}
