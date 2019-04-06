<template>
    <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p v-if="!isUserSignedUp" class="modal-card-title">{{ modalTitle }}</p>
          <p v-if="isUserSignedUp" class="modal-card-title">{{ modalTitleRegistered }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <form @submit="checkForm" action="#" method="post">
          <section class="modal-card-body">
            <div v-if="!isUserSignedUp">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightNameWithError ? 'input is-danger' : 'input']"
                    type="text"
                    :placeholder="namePlaceholder"
                    v-model="name"
                    @keyup="checkNameOnKeyUp(name)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span v-if="highlightNameWithError !== null" class="icon is-small is-right">
                    <i :class="[highlightNameWithError ? 'fas fa-exclamation-circle' : 'fas fa-check']"></i>
                  </span>
                </p>
                <p v-if="highlightNameWithError" class="help is-danger">{{ nameErrorLabel }}</p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightEmailWithError ? 'input is-danger' : 'input']"
                    type="email"
                    :placeholder="emailPlaceholder"
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
                <p v-if="highlightEmailWithError" class="help is-danger">{{ emailErrorLabel }}</p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                    type="password"
                    :placeholder="passwordPlaceholder"
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
                <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordErrorLabel }}</p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightRepeatPasswordWithError ? 'input is-danger' : 'input']"
                    type="password"
                    :placeholder="repeatPasswordPlaceholder"
                    v-model="repeatPassword"
                    @keyup="checkRepeatPasswordOnKeyUp(repeatPassword)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  <span v-if="highlightRepeatPasswordWithError !== null" class="icon is-small is-right">
                    <i :class="[highlightRepeatPasswordWithError ? 'fas fa-exclamation-circle' : 'fas fa-check']"></i>
                  </span>
                </p>
                <p v-if="highlightRepeatPasswordWithError" class="help is-danger">{{ notEqualErrorLabel }}</p>
              </div>
            </div>
            <div v-if="isUserSignedUp" class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="title">Welcome {{ name }}!</p>
                  <p class="heading">Now you are a member</p>
                </div>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button v-if="!isUserSignedUp" class="button is-success">{{ primaryBtnLabel }}</button>
            <button v-if="isUserSignedUp" type="button" class="button is-info" @click="closeModal">{{ btnRegisteredLabel }}</button>
          </footer>
        </form>
      </div>
    </div>
</template>

<script>
import { isValidEmail } from '../../validators';

export default {
  name: 'registration',

  data () {
    return {
      modalTitle: 'Sign up',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Sign up',
      btnRegisteredLabel: 'Close',
      namePlaceholder: 'Name*',
      emailPlaceholder: 'Email*',
      passwordPlaceholder: 'Password*',
      repeatPasswordPlaceholder: 'Repeat Password*',
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


