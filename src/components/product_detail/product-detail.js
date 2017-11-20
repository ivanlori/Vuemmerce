export default {
  name: 'product-detail',
  props: ['id', 'img', 'price', 'description'],
  data() {
    return {
      sectionTitle: 'Product Detail',
      product: {
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        price: 50,
      },
    };
  },
};
