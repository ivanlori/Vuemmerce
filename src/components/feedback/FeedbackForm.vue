<template>
    <section>
        <b-sidebar
                type="is-light"
                :fullheight="true"
                :fullwidth="false"
                :overlay="true"
                :right="true"
                :open.sync="open"
        >
            <div class="feedback-header">
                <h6 class="title is-6 is-uppercase has-text-centered">Fill form</h6>
            </div>
            <form id="feedback-form" @submit="sendFeedback" class="is-flex flex-column">
                <h3 class="title is-3 is-spaced has-text-centered">Feedback</h3>
                <h6 class="subtitle is-6">Share your thoughts about us or ask any question You're interested in.</h6>

                <b-field label="Name">
                    <b-input type="text" required v-model="name"/>
                </b-field>

                <b-field label="Email">
                    <b-input type="email" required v-model="email"/>
                </b-field>

                <b-field label="Message">
                    <b-input required maxlength="300" type="textarea" v-model="feedback"/>
                </b-field>

                <button class="button is-primary feedback-send-btn" type="submit">
                    Send
                </button>
            </form>
        </b-sidebar>
        <b-button rounded
                  class="feedback-btn"
                  size="is-medium"
                  type="is-info"
                  icon-pack="far"
                  icon-right="comment-alt"
                  @click="openSidebar"
        />
    </section>
</template>

<script>
  import {ToastProgrammatic as Toast} from 'buefy';

  const getInitialState = () => ({
    name: '',
    email: '',
    feedback: '',
    open: false,
    timeToShowSuccessToast: false,
  });

  export default {
    data() {
      return getInitialState();
    },
    methods: {
      openSidebar() {
        this.open = true;
      },
      sendFeedback(e) {
        fetch('https://vuemmerce.herokuapp.com/api/feedback', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            feedback: this.feedback,
          }),
        }).then((response) => {
          if (response.ok || this.timeToShowSuccessToast) {
            this.clearForm();
            Toast.open({
              duration: 5000,
              message: 'Your message was successfully sent! Thank You for your feedback!',
              type: 'is-success',
              queue: false,
            });
          } else {
            this.timeToShowSuccessToast = true;
            Toast.open({
              duration: 5000,
              message: 'Something went wrong! Sorry, but try to send your feedback again.',
              type: 'is-danger',
              queue: false,
            });
          }
        });

        e.preventDefault();
      },
      clearForm() {
        Object.assign(this.$data, getInitialState());
      },
    },
  };
</script>

<style lang="scss">
    .feedback-header {
        position: relative;
        border-bottom: 1px solid #D0D1CD;

        span.icon {
            position: absolute;
            cursor: pointer;
            right: 12px;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        h6 {
            margin: 12px 0;
        }
    }

    #feedback-form {
        margin: 24px;

        button.feedback-send-btn {
            max-width: 50%;
            margin: 0 auto;
        }
    }

    button.feedback-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        height: 48px;
        width: 48px;
    }
</style>