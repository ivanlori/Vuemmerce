import ProductItemDetail from '../ProductItemDetail';

export default {
  name: 'products-list',
  components: {
    'product-item-detail': ProductItemDetail,
  },
  data() {
    return {
      id: '',
      productsList: [
        {
          id: 1,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 1',
          price: 50,
        },
        {
          id: 2,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 2',
          price: 35,
        },
        {
          id: 3,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 3',
          price: 110,
        },
      ],
    };
  },
};
