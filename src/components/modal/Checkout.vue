<template>
	<div :class="[ openModal ? 'is-active' : '', 'modal' ]">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">{{ modalTitle }}</p>
				<button class="delete" aria-label="close" @click="closeModal(false)"></button>
			</header>
			<section class="modal-card-body">
				<div v-if="!isCheckoutSection">
					<div class="box" v-for="product in products" :key="product.id">
						<button class="is-pulled-right button is-info is-inverted" @click="removeFromCart(product.id)">{{ removeLabel }}</button>
						<p>{{ product.title }}  {{ product.quantity > 0 ?  ` - Quantity: ${product.quantity}` : ''}}</p>
						<p>{{ product.price }} &euro;</p>
					</div>
					<div v-if="products.length === 0">
						<p>{{ cartEmptyLabel }}</p>
					</div>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button v-show="products.length > 0" class="button is-success" @click="onNextBtn">{{ buyLabel }}</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: 'checkout-component',

	data () {
		return {
			modalTitle: 'Checkout',
			removeLabel: 'Remove from cart',
			cartEmptyLabel: 'Your cart is empty',
			closeLabel: 'Close',
			isCheckoutSection: false
		}
	},

	computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
			openModal () {
				return !!this.$store.getters.isCheckoutModalOpen;
			},
			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						productLabel = '',
						finalPrice = '',
						quantity = 1;

				productsAdded.forEach(product => {

					if (product.quantity >= 1) {
						quantity = product.quantity;
					}

					pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices

				if (totalProducts > 1) { // set plural or singular
					productLabel = 'products';
				} else {
					productLabel = 'product';
				}
				return `Buy ${totalProducts} ${productLabel} at ${finalPrice}€`;
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
	},

	methods: {
		closeModal () {
			this.$store.commit('showCheckoutModal', false);
		},
		removeFromCart (id) {
			let data = { id: id, status: false };
			this.$store.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		},
		onNextBtn () {
			if (!this.isUserLoggedIn) {
				this.$store.commit('showCheckoutModal', false);
				this.$store.commit('showLoginModal', true);
				return;
			}
			this.isCheckoutSection = true;
			this.closeModal();
			this.$router.push('/order');
		},
		onPrevBtn () {
			this.isCheckoutSection = false;
		}
	}
}
</script>

