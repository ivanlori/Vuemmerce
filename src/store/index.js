import Vue from 'vue';
import Vuex from 'vuex';
import initalState from '../initial-state.json';
import search from './modules/search';
import products from './modules/products';
import orders from './modules/orders';
import brands from "./modules/brands";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: initalState,

  getters: {
    getCategoryById: state => id => {
      return state.categories.find(category => category.id == id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    getUserEmail: state => {
      return state.userInfo.email;
    },
    getUserAddress: state => {
      return state.userInfo.address;
    },
    getUserPassword: state => {
      return state.userInfo.password;
    },
    getAvatar: state => {
      return state.userInfo.avatarBinary;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    isPasswordResetModalOpen: state => {
      return state.systemInfo.openPasswordResetModal;
    },

    quantity: state => {
      return state.products.quantity;
    },
    getNewsById: state => id => {
      return state.news.find(newItem => newItem.id == id);
    },

    getReviewsById: state => id => {
      return state.reviews.filter(review => review.product == id);
    },
    getCountReviewsById: state => id => {
      return state.reviews.reduce((acc, review) => {
        return review.product == id ? acc + 1 : acc;
      }, 0);
    },
    getOverallRatingProductById: state => id => {
      let count = 0;
      const sum = state.reviews.reduce((acc, review) => {
        if (review.product == id) {
          count++;
          return acc + review.rating;
        } else {
          return acc;
        }
      }, 0);
      return count === 0 ? 0 : Math.floor(10 * sum / count) / 10;
    }
  },

  mutations: {
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    saveAvatar: (state, avatarBinary) => {
      state.userInfo.avatarBinary = avatarBinary;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setUserEmail: (state, email) => {
      state.userInfo.email = email;
    },
    setUserAddress: (state, address) => {
      state.userInfo.address = address;
    },
    setUserPassword: (state, password) => {
      state.userInfo.password = password;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    showPasswordResetModal: (state, show) => {
      state.systemInfo.openPasswordResetModal = show;
    },

    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    },
    addNewReview: (state, review) => {
      if (state.products[review.product]) {
        const newReview = {
          id: state.reviews.length,
          product: review.product,
          author: review.author,
          rating: review.rating,
          text: review.text
        };
        state.reviews.push(newReview);
      }
    }
  },

  modules: {
    search,
    products,
    orders,
    brands
  },
  
  actions: {
    // eslint-disable-line no-unused-vars
    doPasswordReset: ({}, { email }) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      })
    },
  }
})
