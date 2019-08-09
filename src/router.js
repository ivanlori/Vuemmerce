import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../src/components/homepage/Homepage';
import CategoryProducts from '../src/components/categories/CategoryProducts';
import ProductDetail from '../src/components/product_detail/ProductDetail';
import WishlistContainer from '../src/components/user/WishlistContainer';
import OrderPage from "./components/order_page/OrderPage";
import CartDetail from "./components/cart_detail/CartDetail";
import SearchResults from "./components/search_results/SearchResults";

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
      path: '/category-products/:id',
      name: 'category-products-component',
      props: true,
      component: CategoryProducts,
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail-component',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/order',
      name: 'order',
      component: OrderPage,
    },
    {
      path: '/wishlist',
      name: 'wishlist-container-component',
      component: WishlistContainer,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartDetail,
    },
    {
      path: '/search-results',
      name: 'search-results',
      component: SearchResults,
    }, 
  ],
});
