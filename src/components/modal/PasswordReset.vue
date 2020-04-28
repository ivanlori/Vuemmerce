<template>
  <div :class="[openModal ? 'is-active' : '', 'modal']">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalTitle }}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>

      <form v-on:submit.prevent="onSubmit">
        <section class="modal-card-body">
          <!-- view: password reset -->
          <div v-if="!isSubmitted">
            <div class="field">
              {{ infoReset }}
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[emailError ? 'input is-danger' : 'input']"
                  type="email"
                  :placeholder="emailPlaceholder"
                  name="emailName"
                  v-model="email"
                  @keyup="checkEmailOnKeyUp(email)"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span v-if="email || emailError" class="icon is-small is-right">
                  <i
                    :class="[
                      emailError ? 'fas fa-exclamation-circle' : 'fas fa-check'
                    ]"
                  ></i>
                </span>
              </p>
              <p v-if="emailError" class="help is-danger">{{ emailError }}</p>
            </div>
          </div>

          <!-- view: submitted -->
          <div v-if="isSubmitted" class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">Success!</p>
                <p class="heading">{{ infoSubmitted }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- actions -->
        <footer class="modal-card-foot">
          <!-- button: submit -->
          <b-button
            v-if="!isSubmitted"
            :disabled="!isFormValid"
            :loading="loading"
            class="button is-info"
            native-type="submit"
          >
            {{ btnSubmit }}
          </b-button>
          <!-- button: close -->
          <b-button
            v-if="isSubmitted"
            class="button is-info"
            @click="closeModal"
          >
            {{ btnClose }}
          </b-button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import { isValidEmail } from '../../validators';

export default {
  name: 'password-reset-component',

  data() {
    return {
      modalTitle: 'Password reset',
      infoReset:
        "Enter your user account's verified email address and we will send you a password reset link.",
      infoSubmitted:
        'A password reset link has been sent to your email address.',
      btnSubmit: 'Reset',
      btnClose: 'Close',
      emailPlaceholder: 'Your email',
      emailRequiredLabel: 'Email required',
      emailNotValidLabel: 'Valid email required',

      email: '',
      emailError: '',
      loading: false,
      isFormValid: false,
      isSubmitted: false
    };
  },

  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    openModal() {
      return this.$store.getters.isPasswordResetModalOpen;
    }
  },

  watch: {
    openModal(val) {
      this.reset();
      if (val && this.isUserLoggedIn) {
        this.closeModal();
      }
    },

    emailError(val) {
      if (this.email && !val) {
        this.isFormValid = true;
        return;
      }
      this.isFormValid = false;
    }
  },

  methods: {
    closeModal() {
      this.$store.commit('showPasswordResetModal', false);
    },

    reset() {
      this.resetForm();
      this.isSubmitted = false;
    },

    resetForm() {
      this.email = '';
      this.emailError = '';
      this.loading = false;
      this.isFormValid = false;
    },

    checkEmailOnKeyUp(emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.emailError = '';
        return;
      }

      if (!emailValue) {
        this.emailError = this.emailRequiredLabel;
        return;
      }
      this.emailError = this.emailNotValidLabel;
    },

    onSubmit() {
      if (!this.isFormValid) {
        return;
      }
      this.loading = true;
      this.$store
        .dispatch('doPasswordReset', { email: this.email })
        .then(() => {
          this.isSubmitted = true;
        })
        .finally(() => {
          this.resetForm();
        });
    }
  }
};
</script>

<style lang="scss">
.fa-exclamation-circle {
  color: red;
}
.fa-check {
  color: green;
}
</style>
