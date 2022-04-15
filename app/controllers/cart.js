import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  // The following is also valid:
  // @service('shopping-cart') cart;
  @service shoppingCart;

  // Defining some custom properties to be passed to the template.
  get subtotal() {
    return this.shoppingCart.itemList.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
  }

  get tax() {
    return 0.09 + this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
