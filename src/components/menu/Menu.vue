<template>
    <div>
        <div class="navbar-item">
            <div class="field is-grouped">
                <p class="control">
                    <a v-if="!isUserLoggedIn" class="button" @click="showRegistrationModal">
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
            <a class="navbar-link">
            Welcome User
            </a>

            <div class="navbar-dropdown is-boxed">
                <router-link class="navbar-item" :to="{ path: '/account', name: 'account-component' }">
                    {{ accountLabel }}
                </router-link>
                <router-link class="navbar-item" :to="{ path: '/wishlist', name: 'wishlist-component' }">
                    {{ wishlistLabel }}
                </router-link>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="logout">
                    {{ logoutLabel }}
                </a>
            </div>
        </div>
        <login-modal-component :isLoginActive.sync="isLoginActive"></login-modal-component>
        <registration-modal-component :isRegistrationActive.sync="isRegistrationActive"></registration-modal-component>
    </div>
</template>

<script>
import LoginModal from '../modal/Login';
import RegistrationModal from '../modal/Registration';

export default {
    name: 'menu-component',
    data () {
        return {
            isLoginActive: false,
            isRegistrationActive: false,
            wishlistLabel: 'Wishlist',
            logoutLabel: 'Log out',
            accountLabel: 'My account',
            loginLabel: 'Log in',
            signupLabel: 'Sign up'
        }
    },

    components: {
        'login-modal-component': LoginModal,
        'registration-modal-component': RegistrationModal,
    },

    computed: {
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn;
      }
    },

    methods: {
        logout () {
            this.$store.commit('setIsUserLoggedIn', false);

            // redirect to homepage
            this.$router.push({ name: 'homepage-component' });
        },
        showLoginModal () {
            this.isLoginActive = true;
        },
        showRegistrationModal () {
            this.isRegistrationActive = true;
        }
    }
}
</script>

