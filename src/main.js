import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'bulma-helpers/css/bulma-helpers.min.css';
import 'bulma';
import 'babel-polyfill';
import VueI18n from 'vue-i18n';
import messages from './messages';

import App from './App';
import router from './router';
import store from './store';

import Buefy from 'buefy';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
