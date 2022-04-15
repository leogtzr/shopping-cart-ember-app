import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.name = item.name;
    this.count = item.count;
    this.image = item.image;
    this.color = item.color;
    this.price = item.price;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    console.log(item);
    const existingItem = this.itemList.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
    // This reassign will trigger the "tracking" mechanism that will cause
    // the page to render again.
  }
}
