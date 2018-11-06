<template>
    <div :class="[ isCheckoutActive ? 'is-active' : '', 'modal' ]">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{ modalTitle }}</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <div class="box" v-for="product in products" :key="product.id">
                    <p>{{ product.title }}</p>
                    <p>{{ product.price }} &euro;</p>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">{{ primaryBtnLabel }}</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'checkout-component',
    props: ['isCheckoutActive'],
    
    data () {
        return {
            modalTitle: 'Checkout',
            primaryBtnLabel: 'next'
        }
    },

    computed: {
        products () {

            return this.$store.getters.productsAdded;
        }
    },

    methods: {
        closeModal () {
            this.$emit('update:isCheckoutActive', false);
        }
    }
}
</script>

