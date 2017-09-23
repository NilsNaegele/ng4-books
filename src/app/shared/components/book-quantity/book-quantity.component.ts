import { Component, Input } from '@angular/core';
import { Book } from '../../models/books';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Component({
  selector: 'app-book-quantity',
  templateUrl: './book-quantity.component.html',
  styleUrls: ['./book-quantity.component.css']
})
export class BookQuantityComponent {
  @Input() book: Book;
  @Input() shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
  this.cartService.addToCart(this.book);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.book);
  }

}
