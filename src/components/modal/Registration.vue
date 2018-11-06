<template>
    <div :class="[ isRegistrationActive ? 'is-active' : '', 'modal' ]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Repeat Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">{{ primaryBtnLabel }}</button>
        </footer>
      </div>
    </div>
</template>

<script>
export default {
  name: 'registration-component',
  props: ['isRegistrationActive'],

  data () {
        return {
            modalTitle: 'Sign up',
            primaryBtnLabel: 'Sign up'
        }
    },

  methods: {
    closeModal () {
      this.$emit('update:isRegistrationActive', false);
    }
  }
}
</script>

