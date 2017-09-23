import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { BookFormComponent } from './components/book-form/book-form.component';

import { AuthenticationGuard } from '../shared/services/authentication-guard.service';
import { AdminAuthorizationGuard } from './services/admin-authorization-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'admin/books/new', component: BookFormComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },
      { path: 'admin/books/:id', component: BookFormComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },
      { path: 'admin/books', component: AdminBooksComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] }
    ])
  ],
  declarations: [ AdminBooksComponent, AdminOrdersComponent, BookFormComponent ],
  providers: [ AdminAuthorizationGuard ]
})
export class AdminModule { }
