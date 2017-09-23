import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Book } from '../models/books';
import { ShoppingCart } from '../models/shopping-cart';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
                  .map(b => new ShoppingCart(b.items));
  }

  addToCart(book: Book) {
      this.updateItem(book, +1);
  }

  removeFromCart(book: Book) {
    this.updateItem(book, -1);
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push( {
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getItem(cartId: string, bookId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + bookId);
  }

  private async updateItem(book: Book, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, book.$key);
    item$.take(1).subscribe(item => {
      const quantity = (item.quantity || 0) + change;
      if (quantity === 0) { item$.remove(); }
      else {
        item$.update({
          title: book.title,
          imageUrl: book.imageUrl,
          price: book.price,
          quantity: quantity
        });
      }
    });
  }

}
