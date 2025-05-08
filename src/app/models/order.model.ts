import { OrderDetail } from "./order-detail.model";

export interface Order {
    id: number;
    order_detail: OrderDetail[];
    total: number;
    active: boolean;
  }