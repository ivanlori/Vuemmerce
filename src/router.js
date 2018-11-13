import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../src/components/homepage/Homepage';
import ProductDetail from '../src/components/product_detail/ProductDetail';
import Wishlist from '../src/components/user/Wishlist';
import Account from '../src/components/user/Account';

Vue.use(Router);

export default new Router({
  mode: 'history', // removes hashbang from url
  routes: [
    {
      path: '/',
      name: 'homepage-component',
      component: Homepage,
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail-component',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/wishlist',
      name: 'wishlist-component',
      component: Wishlist,
    },
    {
      path: '/account',
      name: 'account-component',
      component: Account,
    }
  ],
});
