import { Component, Input } from '@angular/core';
import { Book } from '../models/books';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: Book;
  @Input() showActions = true;
  @Input() shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
  this.cartService.addToCart(this.book);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.book);
  }

  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    let item = this.shoppingCart.items[this.book.$key];
    return item ? item.quantity : 0;
  }


}
