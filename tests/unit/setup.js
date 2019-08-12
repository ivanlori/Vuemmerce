import Vue from "vue";
import Buefy from 'buefy';
import { createLocalVue } from "@vue/test-utils";

Vue.use(Buefy)
Vue.config.productionTip = false;
Vue.config.silent = true;

global.newVueInstance = () => {
  const vue = createLocalVue();
  vue.config.silent = true;
  vue.config.productionTip = false;
  return vue;
};

global.clearWishList = (store) => {
  store.state.products.forEach(p => {
    p.isFavourite = false;
  });
}

