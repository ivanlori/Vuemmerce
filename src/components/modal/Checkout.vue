<template>
    <div :class="[ isCheckoutActive ? 'is-active' : '', 'modal' ]">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{ modalTitle }}</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <div v-if="!isCheckoutSection">
                    <div class="box" v-for="product in products" :key="product.id">
                        <button class="is-pulled-right button is-info is-inverted" @click="removeFromCart(product.id)">{{ remove }}</button>
                        <p>{{ product.title }}</p>
                        <p>{{ product.price }} &euro;</p>
                    </div>
                    <div v-if="products.length === 0">
                        <p>Your cart is empty</p>
                    </div>
                </div>
                <div v-if="isCheckoutSection">
                    <p>This section is coming soon</p>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button v-show="products.length > 0 && !isCheckoutSection" class="button is-success" @click="onNextBtn">{{ primaryBtnLabel }}</button>
                <button v-show="isCheckoutSection" class="button is-success" @click="onPrevBtn">Return to the checkout's list</button>
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
            primaryBtnLabel: 'Next',
            remove: 'Remove from cart',
            isCheckoutSection: false
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
        },
        removeFromCart (id) {
            let data = {
                id: id,
                status: false
            }
            this.$store.commit('removeFromCart', id);
            this.$store.commit('setAddedBtn', data);
        },
        onNextBtn () {
            this.isCheckoutSection = true;
        },
        onPrevBtn () {
            this.isCheckoutSection = false;
        }
    }
}
</script>

