import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../models/food.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.scss'
})
export class FoodItemComponent {

  @Input() food!: Food;
  @Output() like = new EventEmitter();
  @Output() order = new EventEmitter();

  onLike() {
    this.like.emit(this.food.id);
  }

  onOrder() {
    this.order.emit(this.food.id);
  }
}
