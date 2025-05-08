import { Component } from '@angular/core';
import { Food } from '../../models/food.model';
import { FoodService } from '../../services/food.service';
import { FormsModule } from '@angular/forms';
import { FoodItemComponent } from '../food-item/food-item.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FormsModule, FoodItemComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  foods: Food[] = [];
  searchTerm = '';

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.loadFoods();
  }

  loadFoods() {
    this.foodService.getFoods(this.searchTerm).subscribe(data => {
      this.foods = data
      console.log(this.foods);
      
    });
  }

  search() {
    this.loadFoods();
  }

  like(id: number) {
    this.foodService.likeFood(id).subscribe(() => this.loadFoods());
  }

  addToOrder(id: number) {
    this.foodService.addToOrder(id).subscribe();
  }
}
