import { Routes } from '@angular/router';
import { OrderPageComponent } from './pages/order-page/order-page.component';

export const routes: Routes = [
    {path: 'inicio',title:'inicio', component: OrderPageComponent},
    {path: '', redirectTo:'/inicio',pathMatch:'full'},
];
