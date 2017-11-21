import ProductsList from '../product_list/ProductsList';

export default {
  name: 'homepage',
  components: {
    'products-list': ProductsList,
  },
  data() {
    return {
      sectionTitle: 'Category',
    };
  },
};
