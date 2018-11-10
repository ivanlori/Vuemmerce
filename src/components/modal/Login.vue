<template>
    <div :class="[ isLoginActive ? 'is-active' : '', 'modal' ]">
        <div class="modal-background"></div>
        <div class="modal-card">
            <form id="js-login-form" @submit="checkForm" action="#" method="post">
                <header class="modal-card-head">
                    <p v-if="!isFormSuccess" class="modal-card-title">{{ modalTitle }}</p>
                    <p v-if="isFormSuccess" class="modal-card-title">{{ modalTitleLoggedIn }}</p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <div v-if="!isFormSuccess">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input
                                    :class="[highlightEmailWithError ? 'input is-danger' : 'input']"
                                    type="email"
                                    placeholder="Your email"
                                    name="emailName"
                                    v-model="email"
                                    @keyup="checkEmailOnKeyUp(email)"
                                >
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span v-if="highlightEmailWithError !== null" class="icon is-small is-right">
                                    <i :class="[highlightEmailWithError ? 'fas fa-exclamation-circle' : 'fas fa-check']"></i>
                                </span>
                            </p>
                            <p v-if="highlightEmailWithError" class="help is-danger">{{ emailRequiredLabel }}</p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input 
                                    :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                                    type="password"
                                    placeholder="Your password"
                                    name="passwordName"
                                    v-model="password"
                                    @keyup="checkPasswordOnKeyUp(password)"
                                >
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                                <span v-if="highlightPasswordWithError !== null" class="icon is-small is-right">
                                    <i :class="[highlightPasswordWithError ? 'fas fa-exclamation-circle' : 'fas fa-check']"></i>
                                </span>
                            </p>
                            <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordRequiredLabel }}</p>
                        </div>
                    </div>
                    <div v-if="isFormSuccess" class="level">
                        <div class="level-item has-text-centered">
                            <div>
                            <p class="title">Welcome!</p>
                            <p class="heading">Now you are logged in</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button v-if="!isFormSuccess" type="submit" class="button is-info">{{ primaryBtnLabel }}</button>
                    <button v-if="isFormSuccess" type="button" class="button is-info" @click="closeModal">{{ btnLoggedInLable }}</button>
                </footer>
            </form>
        </div>
    </div>
</template>

<script>
import { isValidEmail } from '../../validators';

export default {
    name: 'login-component',
    props: ['isLoginActive'],

    data () {
        return {
            modalTitle: 'Log in',
            modalTitleLoggedIn: 'Welcome!',
            primaryBtnLabel: 'Log in',
            emailRequiredLabel: 'Email required',
            passwordRequiredLabel: 'Password required',
            emailNotValidLabel: 'Valid email required',
            btnLoggedInLable: 'Close',
            email: null,
            password: null,
            highlightEmailWithError: null,
            highlightPasswordWithError: null,
            isFormSuccess: false
        }
    },

    methods: {
        closeModal () {
            this.$emit('update:isLoginActive', false);
        },
        checkForm (e) {
            e.preventDefault();

            if (this.email && this.password) {
                this.highlightEmailWithError = false,
                this.highlightPasswordWithError = false;
                this.isFormSuccess = true;
                this.$store.commit('setIsUserLoggedIn', this.isFormSuccess);
            }
            
            if (!this.email) {
                this.highlightEmailWithError = true;
                
                if (this.email && !isValidEmail(this.email)) {
                    this.emailRequiredLabel = this.emailNotValidLabel;
                }
            } else {
                this.highlightEmailWithError = false;
            }

            if (!this.password) {
                this.highlightPasswordWithError = true;
            } else {
                this.highlightPasswordWithError = false;
            }
        },
        checkEmailOnKeyUp (emailValue) {
            if (emailValue && isValidEmail(emailValue)) {
                this.highlightEmailWithError = false;
            } else {
                this.highlightEmailWithError = true;
                
                if (!isValidEmail(emailValue)) {
                    this.emailRequiredLabel = this.emailNotValidLabel;
                }
            }
        },
        checkPasswordOnKeyUp (passwordValue) {
            if (passwordValue) {
                this.highlightPasswordWithError = false;
            } else {
                this.highlightPasswordWithError = true;
            }
        }
    }
}
</script>

<style lang="scss">
    .fa-exclamation-circle {
        color: red;
    }
    .fa-check {
        color: green;
    }
</style>


