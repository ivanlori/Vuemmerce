<template>
  <div :class="[ openModal ? 'fixed flex' : 'hidden', 'modal' ]">
    <div class="modal-background"></div>
    <div class="modal-wrapper">
      <div class="bg-grey_light flex items-center justify-between rounded-t-2xl p-5">
          <p v-if="!isUserLoggedIn" class="text-xl">{{ modalTitle }}</p>
          <p v-if="isUserLoggedIn" class="text-xl">{{ modalTitleLoggedIn }}</p>
          <button class="delete" aria-label="close" @click="closeModal">X</button>
      </div>
      <form @submit="checkForm" action="#" method="post">
        <section class="p-5 rounded-b-2xl">
          <div v-if="!isUserLoggedIn">
            <div class="m-4">
              <input
                :class="[highlightEmailWithError ? 'input border-red' : 'input']"
                type="email"
                placeholder="youremail@email.com"
                name="emailName"
                v-model="email"
                @keyup="checkEmailOnKeyUp(email)"
              />
              <p v-if="highlightEmailWithError" class="text-red">{{ emailRequiredLabel }}</p>
            </div>
            <div class="m-4">
              <input
                :class="[highlightPasswordWithError ? 'input border-red' : 'input']"
                type="password"
                placeholder="********"
                name="passwordName"
                v-model="password"
                @keyup="checkPasswordOnKeyUp(password)"
              />
              <p v-if="highlightPasswordWithError" class="text-red">{{ passwordRequiredLabel }}</p>
            </div>
          </div>
          <div v-if="isUserLoggedIn" class="level">
            <div class="text-center">
              <div>
                <p class="title">Welcome back!</p>
                <p class="heading">Now you are logged in</p>
              </div>
            </div>
          </div>
          <div class="m-4">
            <button v-if="!isUserLoggedIn" type="submit" class="rounded-xl p-3 bg-blue text-white w-full">{{ loginBtnLabel }}</button>
            <button v-if="isUserLoggedIn" type="button" class="rounded-xl p-3 bg-grey_light text-grey_dark" @click="closeModal">{{ btnLoggedInLabel }}</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import { isValidEmail } from '@/assets/validators';

export default {
  name: 'login',

  data () {
    return {
      modalTitle: 'Log in',
      modalTitleLoggedIn: 'Welcome!',
      loginBtnLabel: 'Log in',
      emailRequiredLabel: 'Email required',
      passwordRequiredLabel: 'Password required',
      emailNotValidLabel: 'Valid email required',
      btnLoggedInLabel: 'Close',
      email: '',
      password: '',
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn;
    },
    openModal () {
      if (this.$store.getters.isLoginModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    closeModal () {
      this.$store.commit('showLoginModal', false);
    },
    checkForm (e) {
      e.preventDefault();

      if (this.email && this.password) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        this.$store.commit('isUserLoggedIn', this.isFormSuccess);
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
};
</script>

<style lang="scss">
  .fa-exclamation-circle {
    @apply text-red;
  }
  .fa-check {
    @apply text-green;
  }
</style>


