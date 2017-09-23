import { ShoppingCart } from './shopping-cart';

export class Order {
    datePlaced: number;
    items: any[];


    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
      this.datePlaced = new Date().getTime();

      this.items = shoppingCart.items.map(b => {
        return {
          book: {
            title: b.title,
            imageUrl: b.imageUrl,
            price: b.price
          },
          quantity: b.quantity,
          totalPrice: b.totalPrice
        };
      });
    }


}
