<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third">
        <figure class="levle-item image">
          <img src="https://placeimg.com/400/200/any">
        </figure>
      </div>
      <div class="column is-two-third">
        <h2 class="title is-4">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <span class="title is-3"><strong>{{ product.price }}&euro;</strong></span>
        <div class="is-pulled-right">
          <button class="button is-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="box__details row">
      <div class="box__details__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>

<script>
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
</script>

<style lang="scss" scoped></style>
