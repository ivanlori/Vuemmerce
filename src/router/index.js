import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../components/homepage/Homepage';
import ProductDetail from '../components/product_detail/ProductDetail';
import WorkInProgress from '../components/WorkProgress';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/login',
      name: 'login',
      component: WorkInProgress,
    },
    {
      path: '/register',
      name: 'register',
      component: WorkInProgress,
    },
    {
      path: '/cart',
      name: 'cart',
      component: WorkInProgress,
    },
  ],
});
