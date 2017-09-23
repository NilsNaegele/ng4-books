import { ShoppingCartItem } from './shopping-cart.item';
import { Book } from './books';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [bookId: string]: ShoppingCartItem } ) {
          this.itemsMap = itemsMap || {};
          for (const bookId in itemsMap) {
              if (this.itemsMap.hasOwnProperty(bookId)) {
                const item = itemsMap[bookId];
                this.items.push( new ShoppingCartItem({ ...item, $key: bookId }));
              }
          }
   }

   get totalPrice() {
     let sum = 0;
     for (const bookId in this.items) {
          if (this.items.hasOwnProperty(bookId)) {
            sum += this.items[bookId].totalPrice;
          }
     }
     return sum;
   }

  get totalItemsCount() {
    let count = 0;
    for (const bookId in this.items) {
          if (this.items.hasOwnProperty(bookId)) {
          count += this.items[bookId].quantity;
        }
    }
    return count;
  }

  getQuantity(book: Book) {
    const item = this.itemsMap[book.$key];
    return item ? item.quantity : 0;
  }

}
