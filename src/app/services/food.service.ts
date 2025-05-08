import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getFoods(filter?: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/foods${filter ? `?filter=${filter}` : ''}`);
  }

  createFood(food: Partial<Food>): Observable<Food> {
    return this.http.post<Food>(`${this.apiUrl}/foods`, food);
  }

  likeFood(id: number): Observable<Food> {
    return this.http.post<Food>(`${this.apiUrl}/foods/${id}/like`, {});
  }

  addToOrder(id: number): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/foods/${id}/order`, {});
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/orders/${id}`);
  }

  updateQuantity(orderId: number, foodId: number, action: 'INCREASE' | 'DECREASE'): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/orders/${orderId}/foods/${foodId}`, { action });
  }

  checkout(orderId: number): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders/${orderId}/checkout`, {});
  }
}
