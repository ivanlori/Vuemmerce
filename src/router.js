import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../src/components/homepage/Homepage';
import CategoryProducts from '../src/components/categories/CategoryProducts';
import ProductDetail from '../src/components/product_detail/ProductDetail';
import ProductReviews from '../src/components/product_reviews/ProductReviews';
import WishlistContainer from '../src/components/user/WishlistContainer';
import OrderPage from "./components/order_page/OrderPage";
import CartDetail from "./components/cart_detail/CartDetail";
import SearchResults from "./components/search_results/SearchResults";
import Profile from "./components/profile/Profile";
import AllNews from "./components/news/AllNews";
import SingleNew from "./components/news/SingleNew";
import Compare from "./components/compare/Compare";
import TagProducts from './components/tag_products/TagProducts';

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
      path: '/tag-products/:id',
      name: 'TagProducts',
      props: true,
      component: TagProducts,
    },
    {
      path: '/product-detail/:id',
      redirect: '/product-detail/:id/tab/1',
      name: 'product-detail-component',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/product-detail/:id/tab/:tabid',
      name: 'product-detail-component-tab',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/product-detail/:id/reviews',
      name: 'product-reviews-component',
      props: true,
      component: ProductReviews,
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
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/news',
      name: 'news',
      component: AllNews
    },
    {
      path: '/news/:id',
      name: 'singleNew',
      component: SingleNew,
      props: true
    },
    {
      path: '/my-orders',
      name: 'myOrders',
      component: () => import('./components/profile/MyOrders'),
    },
    {
      path: '/compare',
      name: 'compare',
      component: Compare,
    }
  ],
});
