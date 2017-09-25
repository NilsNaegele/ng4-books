import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BooksComponent } from './components/books/books.component';
import { BookFilterComponent } from './components/books/book-filter/book-filter.component';

import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { DeliveryFormComponent } from './components/delivery-form/delivery-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

import { AuthenticationGuard } from '../shared/services/authentication-guard.service';
import { FeedbackComponent } from './components/books/feedback/feedback.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'books', component: BooksComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [ AuthenticationGuard ] }
    ])
  ],
  declarations: [
    BooksComponent,
    BookFilterComponent,
    CheckOutComponent,
    DeliveryFormComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    FeedbackComponent
  ]
})
export class ShoppingModule { }
