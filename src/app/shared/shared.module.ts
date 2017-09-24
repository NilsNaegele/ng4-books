import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookQuantityComponent } from './components/book-quantity/book-quantity.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { BookService } from './services/book.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { AnimationsService } from './services/animations.service';
import { ChatService } from './services/chat.service';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HeartComponent } from './components/heart/heart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: 'book/:id', component: BookDetailsComponent },
    ])
  ],
  declarations: [ BookCardComponent, BookDetailsComponent, BookQuantityComponent, FavoriteComponent, HeartComponent ],
  exports: [ BookCardComponent, BookQuantityComponent, FavoriteComponent, HeartComponent, CommonModule,
    FormsModule, CustomFormsModule, AngularFireDatabaseModule, AngularFireAuthModule, NgbModule.forRoot().ngModule],
  providers: [ AuthenticationService,
               UserService, CategoryService, BookService, ShoppingCartService,
               OrderService, AnimationsService, ChatService ]
})
export class SharedModule { }
