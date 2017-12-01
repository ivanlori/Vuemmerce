// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import './vendor/normalize.css';
import './vendor/skeleton.css';
import './vendor/ionicons.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Router,
  template: '<App/>',
  components: { App },
});
