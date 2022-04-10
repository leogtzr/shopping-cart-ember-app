import EmberRouter from '@ember/routing/router';
import config from 'ember-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/item/:item_id' });
  this.route('not-found', { path: '/*path' });
  // the path 'shopping-cart' will take us to templates/cart.hbs
  this.route('cart', { path: 'shopping-cart' });
});
