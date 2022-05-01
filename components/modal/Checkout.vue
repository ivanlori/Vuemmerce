<template>
	<div :class="[ openModal ? 'fixed flex' : 'hidden', 'modal' ]">
		<div class="modal-background"></div>
		<div class="modal-wrapper">
			<div class="bg-grey_light flex items-center justify-between rounded-t-2xl p-5">
				<p class="text-xl">{{ modalTitle }}</p>
				<button class="delete" aria-label="close" @click="closeModal(false)">X</button>
			</div>
			<section class="p-5 rounded-b-2xl">
				<div v-if="!isCheckoutSection">
					<div class="box" v-for="product in products" :key="product.id">
						<div>
              <p>{{ product.title }}  {{ product.quantity > 0 ?  ` - Quantity: ${product.quantity}` : ''}}</p>
						  <p>{{ product.price }} &euro;</p>
            </div>
            <button class="rounded-xl p-3 text-white bg-red" @click="removeFromCart(product.id)">{{ removeLabel }}</button>
					</div>
					<div v-if="products.length === 0">
						<p>{{ cartEmptyLabel }}</p>
					</div>
				</div>
				<div v-if="isCheckoutSection">
					<p>You bought it :-)</p>
				</div>
			</section>
			<div class="m-4">
				<button v-show="products.length > 0 && !isCheckoutSection" class="rounded-xl p-3 bg-blue text-white w-full" @click="onNextBtn">{{ buyLabel }}</button>
				<button v-if="isCheckoutSection" class="rounded-xl p-3 bg-blue text-white w-full" @click="closeModal(true)">{{ closeLabel }}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'checkout',

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
				if (this.$store.getters.isCheckoutModalOpen) {
					return true;
				} else {
					return false;
				}
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
		closeModal (reloadPage) {
			this.$store.commit('showCheckoutModal', false);

			if (reloadPage) {
				window.location.reload();
			}
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
			if (this.isUserLoggedIn) {
				this.isCheckoutSection = true;
			} else {
				this.$store.commit('showCheckoutModal', false);
				this.$store.commit('showLoginModal', true);
			}
		},
		onPrevBtn () {
			this.isCheckoutSection = false;
		}
	}
}
</script>

<style lang="scss" scoped>
  .box {
    @apply flex;
    @apply justify-between;
    @apply mb-3;
  }
</style>
