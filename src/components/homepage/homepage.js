import ProductsList from '../product_list/ProductsList';

export default {
  name: 'home',
  components: {
    'products-list': ProductsList,
  },
  data() {
    return {
      sectionTitle: 'Category',
    };
  },
};
