import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { BookService } from '../book.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';

import { AppUser } from '../models/app-user';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private bookService: BookService) { }

  onSearch(query: string): void {
    if (!query) { return; }
    this.bookService.searchEvent.emit(query.toLowerCase());
  }

  async ngOnInit() {
    this.authenticationService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.authenticationService.logout();
  }

}
