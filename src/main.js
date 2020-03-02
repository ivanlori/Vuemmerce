import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma-helpers/css/bulma-helpers.min.css';
import 'bulma';
import 'babel-polyfill';
import VueI18n from 'vue-i18n';
import VueMeta from 'vue-meta';
import Nl2br from 'vue-nl2br';
import messages from './messages';

import App from './App';
import router from './router';
import store from './store';

import Buefy from 'buefy';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueI18n);
Vue.use(VueMeta);

Vue.component('nl2br', Nl2br);

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
