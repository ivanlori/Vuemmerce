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
        {
          id: 4,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 4',
          price: 340,
        },
        {
          id: 5,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 5',
          price: 10,
        },
        {
          id: 6,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 6',
          price: 500,
        },
        {
          id: 7,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 7',
          price: 340,
        },
        {
          id: 8,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 8',
          price: 10,
        },
        {
          id: 9,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 9',
          price: 500,
        },
        {
          id: 10,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 10',
          price: 340,
        },
        {
          id: 11,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 11',
          price: 10,
        },
        {
          id: 12,
          image: 'https://placeimg.com/300/150/tech',
          description: 'Product 12',
          price: 500,
        },
      ],
    };
  },
};
