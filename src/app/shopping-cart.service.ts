import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Book } from './models/books';
import { ShoppingCart } from './models/shopping-cart';

import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push( {
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<FirebaseObjectObservable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
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

  addToCart(book: Book) {
      this.updateItemQuantity(book, +1);
  }

  removeFromCart(book: Book) {
    this.updateItemQuantity(book, -1);
  }

  private async updateItemQuantity(book: Book, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, book.$key);
    item$.take(1).subscribe(item => {
        item$.update({ book: book, quantity: (item.quantity || 0) + change
        });
    });
  }

}
