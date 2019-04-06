import Vue from 'vue';
import Router from 'vue-router';
import VmHomepage from '../src/components/homepage/Homepage';
import VmProductDetail from '../src/components/product_detail/ProductDetail';
import VmWishlistPage from '../src/components/user/WishlistContainer';

Vue.use(Router);

export default new Router({
  mode: 'history', // removes hashbang from url
  routes: [
    {
      path: '/',
      name: 'index',
      component: VmHomepage,
    },
    {
      path: '/product-detail/:id',
      name: 'productDetail',
      props: true,
      component: VmProductDetail,
    },
    {
      path: '/wishlist',
      name: 'wishlistPage',
      component: VmWishlistPage,
    }
  ],
});
