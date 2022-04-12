import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default class CartController extends Controller {
  // The following is also valid:
  // @service('shopping-cart') cart;
  @service shoppingCart;

  // Defining some custom properties to be passed to the template.
  get subtotal() {
    return this.model.reduce((acc, item) => acc + item.price, 0);
  }

  get tax() {
    return 0.09 + this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
