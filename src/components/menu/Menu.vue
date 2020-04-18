<template>
	<div>
		<div class="navbar-item">
			<div class="field is-grouped">
				<p class="control">
					<a v-if="!isUserLoggedIn" class="button" @click="showSignupModal">
						<span class="icon">
							<i class="fas fa-user-plus"></i>
						</span>
						<span>{{ signupLabel }}</span>
					</a>
				</p>
				<p class="control">
					<a v-if="!isUserLoggedIn" class="button" @click="showLoginModal">
						<span class="icon">
							<i class="fas fa-user"></i>
						</span>
						<span>{{ loginLabel }}</span>
					</a>
				</p>
			</div>
		</div>
		<div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
            <img :src="getAvatar">
			<a class="navbar-link">
			Welcome {{ getUserName }}
			</a>
			<div class="navbar-dropdown is-boxed">
				<router-link class="navbar-item" :to="{ path: '/profile' }">
					{{ profileLabel }}
				</router-link>
				<router-link class="navbar-item" :to="{ path: '/wishlist', name: 'wishlist-container-component' }">
					{{ wishlistLabel }}
				</router-link>
				<router-link class="navbar-item" :to="{name: 'myOrders'}">My orders</router-link>
				<hr class="navbar-divider">
				<a class="navbar-item" @click="logout">
					{{ logoutLabel }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'menu-component',
	data () {
		return {
			profileLabel: 'Profile',
			wishlistLabel: 'Wishlist',
			logoutLabel: 'Log out',
			loginLabel: 'Log in',
			signupLabel: 'Sign up'
		}
	},

	computed: {
        ...mapGetters(['getAvatar']),
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		},
		getUserName () {
			let name = this.$store.getters.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
		}
	},

	methods: {
		logout () {
			this.$store.commit('isUserLoggedIn', false);
			this.$store.commit('isUserSignedUp', false);
			this.$store.commit('removeProductsFromFavourite');

			// redirect to homepage
			this.$router.push({ name: 'homepage-component' });
		},
		showLoginModal () {
			this.$store.commit('showLoginModal', true);
		},
		showSignupModal () {
			this.$store.commit('showSignupModal', true);
		}
	}
}
</script>

