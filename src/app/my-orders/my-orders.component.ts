import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthenticationService } from '../authentication.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(private authenticationService: AuthenticationService,
              private orderService: OrderService) {
              this.orders$ = authenticationService.user$.switchMap(
                user => orderService.getOrdersByUser(user.uid));
              }


}
