import Controller from '@ember/controller';

export default class CartController extends Controller {
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
