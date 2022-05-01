<template>
    <div :class="[ openModal ? 'fixed flex' : 'hidden', 'modal' ]">
      <div class="modal-background"></div>
      <div class="modal-wrapper">
        <div class="bg-grey_light flex items-center justify-between rounded-t-2xl p-5">
          <p v-if="!isUserSignedUp" class="text-xl">{{ modalTitle }}</p>
          <p v-if="isUserSignedUp" class="text-xl">{{ modalTitleRegistered }}</p>
          <button class="delete" aria-label="close" @click="closeModal">X</button>
        </div>
        <form @submit="checkForm" action="#" method="post">
          <section class="p-5 rounded-b-2xl">
            <div v-if="!isUserSignedUp">
              <div class="m-4">
                <input
                  :class="[highlightNameWithError ? 'input border-red' : 'input']"
                  type="text"
                  placeholder="Your Name"
                  v-model="name"
                  @keyup="checkNameOnKeyUp(name)"
                />
                <p v-if="highlightNameWithError" class="help text-red">{{ nameErrorLabel }}</p>
              </div>
              <div class="m-4">
                <input
                  :class="[highlightEmailWithError ? 'input border-red' : 'input']"
                  type="email"
                  placeholder="youremail@email.com"
                  name="emailName"
                  v-model="email"
                  @keyup="checkEmailOnKeyUp(email)"
                />
                <p v-if="highlightEmailWithError" class="help text-red">{{ emailErrorLabel }}</p>
              </div>
              <div class="m-4">
                <input
                  :class="[highlightPasswordWithError ? 'input border-red' : 'input']"
                  type="password"
                  placeholder="********"
                  v-model="password"
                  @keyup="checkPasswordOnKeyUp(password)"
                >
                <p v-if="highlightPasswordWithError" class="help text-red">{{ passwordErrorLabel }}</p>
              </div>
              <div class="m-4">
                  <input
                    :class="[highlightRepeatPasswordWithError ? 'input border-red' : 'input']"
                    type="password"
                    placeholder="********"
                    v-model="repeatPassword"
                    @keyup="checkRepeatPasswordOnKeyUp(repeatPassword)"
                  />
                <p v-if="highlightRepeatPasswordWithError" class="help text-red">{{ notEqualErrorLabel }}</p>
              </div>
            </div>
            <div v-if="isUserSignedUp">
              <div class="text-center">
                <div>
                  <p class="text-4xl">Welcome {{ name }}!</p>
                  <p class="text-2xl">Now you are a member</p>
                </div>
              </div>
            </div>
          </section>
          <div class="m-4">
            <button v-if="!isUserSignedUp" class="rounded-xl p-3 bg-blue text-white w-full">{{ primaryBtnLabel }}</button>
            <button v-if="isUserSignedUp" type="button" class="rounded-xl p-3 bg-grey_light text-grey_dark" @click="closeModal">{{ btnRegisteredLabel }}</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { isValidEmail } from '@/assets/validators';

export default {
  name: 'signup',

  data () {
    return {
      modalTitle: 'Sign up',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Sign up',
      btnRegisteredLabel: 'Close',
      notEqualErrorLabel: 'Passwords must be equal',
      passwordErrorLabel: 'Password required',
      nameErrorLabel: 'Name required',
      emailErrorLabel: 'Email required',
      emailNotValidLabel: 'Valid email required',
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      highlightNameWithError: null,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      highlightRepeatPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserSignedUp () {
      return this.$store.getters.isUserSignedUp;
    },
    openModal () {
      if (this.$store.getters.isSignupModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    closeModal () {
      this.$store.commit('showSignupModal', false);
    },
    checkForm (e) {
      e.preventDefault();

      if (this.name && this.email && this.password && this.repeatPassword) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        this.$store.commit('setUserName', this.name);
        this.$store.commit('isUserSignedUp', this.isFormSuccess);
        this.$store.commit('isUserLoggedIn', this.isFormSuccess);
      }

      if (!this.name) {
        this.highlightNameWithError = true;
      } else {
        this.highlightNameWithError = false;
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      if (!this.password) {
        this.highlightPasswordWithError = true;
      } else {
        this.highlightPasswordWithError = false;
      }

      if (!this.repeatPassword) {
        this.highlightRepeatPasswordWithError = true;
      } else {
        this.highlightRepeatPasswordWithError = false;
      }
    },
    checkNameOnKeyUp (nameValue) {
      if (nameValue) {
        this.highlightNameWithError = false;
      } else {
        this.highlightNameWithError = true;
      }
    },
    checkEmailOnKeyUp (emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail (emailValue)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;

        if (this.repeatPassword === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightPasswordWithError = true;
      }
    },
    checkRepeatPasswordOnKeyUp (repeatPasswordValue) {
      if (repeatPasswordValue) {
        if (repeatPasswordValue === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightRepeatPasswordWithError = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fa-exclamation-circle {
  color: red;
}
.fa-check {
  color: green;
}
</style>


