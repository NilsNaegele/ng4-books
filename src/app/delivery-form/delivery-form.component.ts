import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { OrderService } from '../order.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit, OnDestroy {
  @Input() cart: ShoppingCart;
  userId = '';
  userSubscription: Subscription;
  userShippingInfo = { fullName: '', address: '', zipCode: '', city: '', country: ''};

  constructor(private router: Router, private orderService: OrderService,
              private authenticationService: AuthenticationService) { }

  async placeOrder() {
    const order = new Order(this.userId, this.userShippingInfo, this.cart);
    const result = await this.orderService.makeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnInit() {
  this.userSubscription = this.authenticationService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
  this.userSubscription.unsubscribe();
  }

}
