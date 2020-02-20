<template>
    <div class="review-item-create-box">
        <section>
            <h3>New review</h3>
        </section>
        <section>
            <b-field label="Name">
                <b-input maxlength="50" v-model="nameValue"/>
            </b-field>
            <b-field label="Rating">
                <b-rate v-model="ratingValue"
                        :icon-pack="packs"
                        :disabled="isDisabled"
                        size="is-small">
                </b-rate>
            </b-field>
            <b-field label="Message">
                <b-input maxlength="2000" type="textarea" v-model="messageValue" />
            </b-field>
            <b-field>
                <p class="control">
                    <button class="button is-primary" @click="sendNewRating">
                        Send
                    </button>
                </p>
            </b-field>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'product-reviews-create-component',

        props: {
            productId: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                packs: 'fas',
                icons: 'star',
                isDisabled: false,
                rating: 5,
                name: '',
                message: ''
            }
        },

        computed: {
            ratingValue: {
                get: function () {
                    return this.rating;
                },
                set: function (value) {
                    this.rating = value >= 1 ? value : 1;
                }
            },
            messageValue: {
                get: function () {
                    return this.message;
                },
                set: function (value) {
                    this.message = value;
                }
            },
            nameValue: {
                get: function () {
                    return this.name;
                },
                set: function (value) {
                    this.name = value;
                }
            }
        },

        methods: {
            sendNewRating() {
                const newReview = {
                    product: this.productId,
                    author: this.nameValue,
                    rating: this.ratingValue,
                    text: this.messageValue
                };
                this.$store.commit('addNewReview', newReview);
                this.$parent.close();
                this.$buefy.toast.open({
                    duration: 4000,
                    message: "MESSAGE SENT! <br/>Name: "
                        + this.nameValue + ", <br/>Rating: "
                        + this.ratingValue+ ", <br/>Message: "
                        + (this.messageValue.length > 10 ? this.messageValue.substr(0, 10) + '...' : this.messageValue)
                });
                this.clear();
            },
            clear() {
                this.nameValue = '';
                this.ratingValue = 0;
                this.messageValue = '';
            }
        }
    }
</script>

<style scoped>
    .review-item-create-box {
        background-color: #ffffff;
        width: 500px;
        height: 440px;
        margin: 0 auto;
        padding: 15px;
        border-radius: 5px;
        overflow: hidden;
    }
    .review-item-create-box h3 {
        color: #363636;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.125;
        display: block;
        margin-bottom: 17px;
    }
    .review-item-create-box .control {
        text-align: right;
    }
    .review-item-create-box textarea {
        resize: none;
    }

    .review-item-create-box .field:first-child {
        margin-bottom: 0;
    }
</style>