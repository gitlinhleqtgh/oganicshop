import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent {
  /*orders$ ;

  constructor(private orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }*/
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

      this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid)));
    }

}
