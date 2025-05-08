import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from "./components/food-list/food-list.component";
import { FoodItemComponent } from "./components/food-item/food-item.component";
import { OrderPageComponent } from "./pages/order-page/order-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodListComponent, FoodItemComponent, OrderPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-angular';
}
