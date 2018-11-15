import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 5,
        reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 3,
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 2,
        reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 4,
        title: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 1,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 5,
        title: 'Product 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 6,
        title: 'Product 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 5,
        reviews: 1,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 7,
        title: 'Product 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 5,
        reviews: 7,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 8,
        title: 'Product 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 3,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false
      },
      {
        id: 9,
        title: 'Product 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false
      }
    ],
    userInfo: {
      isLoggedIn: false,
      hasSearched: false,
      productTitleSearched: ''
    }
  },
  
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    }
  },
  
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    setIsUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    }
  },
  
  actions: {

  },
});
