<template>
    <div class="review-item-box">
        <section>
            <b-icon class="review-item-icon"
                    pack="fas"
                    icon="user-circle"
                    size="is-small">
            </b-icon> <strong>{{ review.author }}</strong>
        </section>
        <section class="review-item-rating">
            <b-rate v-model="review.rating"
                    :icon-pack="packs"
                    :disabled="isDisabled"
                    size="is-small">
            </b-rate>
        </section>
        <section class="review-item-text">
            <nl2br tag="p" :text="review.text" />
        </section>
    </div>
</template>

<script>
    export default {
        name: 'product-reviews-item-component',

        props: {
            product: {
                type: Object,
                required: true
            },
            review: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                packs: 'fas',
                icons: 'star',
                isDisabled: true
            }
        }
    }
</script>

<style scoped>
    .review-item-box {
        border-bottom: 1px #dddddd solid;
        margin: 10px 10px 30px 0;
        padding-bottom: 20px;
    }
    .review-item-box:last-child {
        border-bottom-width: 0;
    }
    .review-item-rating {
        margin-top: 5px;
    }
    .review-item-text {
        margin-top: 20px;
    }
    .review-item-icon {
        margin-right: 7px;
    }
</style>