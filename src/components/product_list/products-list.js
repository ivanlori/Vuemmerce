import ProductDetail from '../product_detail/ProductDetail';

export default {
  name: 'products-list',
  components: {
    'product-detail': ProductDetail,
  },
  data() {
    return {
      id: '',
      productsList: [
        {
          id: 1,
          description: 'Product 1',
          price: 50,
        },
        {
          id: 2,
          description: 'Product 2',
          price: 35,
        },
        {
          id: 3,
          description: 'Product 3',
          price: 110,
        },
        {
          id: 4,
          description: 'Product 4',
          price: 50,
        },
        {
          id: 5,
          description: 'Product 5',
          price: 35,
        },
        {
          id: 6,
          description: 'Product 6',
          price: 110,
        },
        {
          id: 7,
          description: 'Product 7',
          price: 50,
        },
        {
          id: 8,
          description: 'Product 8',
          price: 35,
        },
        {
          id: 9,
          description: 'Product 9',
          price: 110,
        },
      ],
    };
  },
};
