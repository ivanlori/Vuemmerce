<template>
  <div class="footer">
    <success-message v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        Message
      </template>
      <template v-slot:body>
        <i class="fa fa-check" aria-hidden="true"></i> &nbsp; You have successfully subscribed
      </template>
    </success-message>
    <div class="bl-subscribe">
      <div class="left-descr">
        <i class="fa fa-envelope" aria-hidden="true"></i>Get the most interesting offers first!
      </div>
      <form class="form" @submit="checkSubscribe" action="#" method="post" novalidate="true">
        <div class="err" v-if="errors != ''">{{errors}}</div>
        <input v-model="email" name="email" class="input" v-bind:class="{ border_red: errClass }" type="email" placeholder="Enter email for subscribe">
        <button class="button is-success" type="submit">Subscribe</button>
      </form>
    </div>
    <div class="columns container">
      <div class="column">
        <p><a href="https://otus.ru/lessons/javascript/?int_source=courses_catalog&int_term=programming" target="_blank">OTUS JS course</a> powered e-commerce UI</p>
      </div>
      <div class="column has-text-right">
        <code>v {{settings.version}}</code><p>Vuemmerce | Made with ❤</p>
      </div>
    </div>
  </div>
</template>

<script>
  import settings from '@/settings';
  import { isValidEmail } from '../../validators';
  import SuccessMessageModal from '../modal/SuccessMessage';

  export default {
    name: 'footer-component',

    components: {
      'success-message': SuccessMessageModal,
    },

    data: () => {
      return {
        settings,
        email: null,
        errors: '',
        errClass: false,
        isModalVisible: false,
      }
    },

    methods: {
      showModal() {
        this.isModalVisible = true;
        console.log('showModal');
      },
      closeModal() {
        this.isModalVisible = false;
      },
      checkSubscribe: function (e) {
        this.errors = '';

        if (!this.email) {
          this.errors = 'Enter email';
        } else if (!isValidEmail(this.email)) {
          this.errors = 'Enter the correct email';
        }

        e.preventDefault();

        if (this.errors == '') {
          this.errClass = false;
          const axios = require('axios');
          axios
                  .post('/api/new-subscription', {
                    email: this.email,
                  })
                  .then( response => {
                    /*this.email = '';
                    this.showModal();*/
                  });
          this.email = '';
          this.showModal();
        }else{
          this.errClass = true;
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    background: #b9e2fc;
    color: black;
  }
  .bl-subscribe {
    overflow: auto;
    margin-bottom: 44px;
    width: 100%;
  }
  .left-descr {
    float: left;
    font-size: 25px;
    margin-bottom: 14px;
  }
  .left-descr i {
    margin-right: 10px;
  }
  .form {
    float: right;
    width: 325px;
  }
  input {
    float: left;
    width: 220px;
  }
  .form button {
    margin-left: 5px;
  }
  .border_red {
    border-color: red;
  }
  .err {
    color: red;
    font-size: 11px;
    position: absolute;
    margin-top: -15px;
    margin-left: 5px;
  }
</style>
