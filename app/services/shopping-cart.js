import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    console.log(item);
    // This reassign will trigger the "tracking" mechanism that will cause
    // the page to render again.
    this.itemList = [...this.itemList, item];
  }
}
