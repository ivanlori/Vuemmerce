import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'bulma-helpers/css/bulma-helpers.min.css';
import 'bulma';
import 'babel-polyfill';

import App from './App';
import router from './router';
import store from './store';

import Buefy from 'buefy';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
