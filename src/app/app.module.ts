import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from '../environments/environment';

import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './authentication-guard.service';
import { AdminAuthorizationGuard } from './admin-authorization-guard.service';

import { UserService } from './user.service';
import { CategoryService } from './category.service';
import { BookService } from './book.service';
import { ShoppingCartService } from './shopping-cart.service';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AnimationsComponent } from './animations/animations.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { BookFormComponent } from './admin/book-form/book-form.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterComponent } from './books/book-filter/book-filter.component';
import { BookQuantityComponent } from './book-quantity/book-quantity.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    BooksComponent,
    AnimationsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminBooksComponent,
    AdminOrdersComponent,
    LoginComponent,
    AboutComponent,
    ChatComponent,
    BookFormComponent,
    BookCardComponent,
    BookFilterComponent,
    BookQuantityComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: '', component: WelcomeComponent },
      { path: 'home', component: BooksComponent },
      { path: 'about', component: AboutComponent },
      { path: 'books', component: BooksComponent },
      { path: 'book/:id', component: BookDetailsComponent },
      { path: 'animations', component: AnimationsComponent },
      { path: 'chat', component: ChatComponent},
      { path: 'login', component: LoginComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'admin/books/new', component: BookFormComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },
      { path: 'admin/books/:id', component: BookFormComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },
      { path: 'admin/books', component: AdminBooksComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthenticationGuard, AdminAuthorizationGuard ] },

      { path: '**', component: WelcomeComponent }
    ])
  ],
  providers: [ AuthenticationService, AuthenticationGuard, AdminAuthorizationGuard,
               UserService, CategoryService, BookService, ShoppingCartService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
