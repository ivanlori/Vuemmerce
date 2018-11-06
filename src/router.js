import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../src/components/homepage/Homepage';
import ProductDetail from '../src/components/product_detail/ProductDetail';
import WorkInProgress from '../src/components/WorkProgress';

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
      name: 'product-detail',
      props: true,
      component: ProductDetail,
    }
  ],
});
