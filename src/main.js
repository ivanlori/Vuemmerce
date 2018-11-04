import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import 'babel-polyfill';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
