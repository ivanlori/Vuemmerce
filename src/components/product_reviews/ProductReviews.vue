<template>
    <section>
        <breadcrumbs-component :items="path" />
        <categories_navigation class="class='column is-2 is-pulled-left is-desktop is-narrow'" :id='category.id'></categories_navigation>
        <div class="section">
            <div class="card is-clearfix columns">
                <div class="reviews-graph column is-one-thirds">
                    <section>
                        <h3>{{ product.title }}</h3>
                    </section>
                    <section class="review-box-1">
                        <b-rate v-model="productRating"
                                :icon-pack="packs"
                                :show-score="score"
                                :disabled="isDisabled"
                                size="is-small">
                        </b-rate>
                    </section>
                    <section class="review-box-1">
                        {{ countReviews }} customer ratings
                    </section>
                    <section class="review-box-1" v-if="countReviews > 0">
                        <product-reviews-graph :productId="product.id"/>
                    </section>
                    <section class="review-box-2">
                        <button class="button is-primary"
                                @click="isModalActive = true">
                            New review
                        </button>
                    </section>
                </div>
                <div class="reviews-list column is-two-thirds">
                    <section>
                        <h3>Customer reviews</h3>
                    </section>
                    <div v-if="countReviews > 0">
                        <product-reviews-item
                                    v-for="(review, index) in reviews"
                                    :key="index"
                                    :value="review"
                                    :review="review"
                                    :product="product"/>
                    </div>
                    <div v-else>No product reviews</div>
                </div>
            </div>
        </div>
        <b-modal :active.sync="isModalActive">
            <product-reviews-create :productId="product.id"/>
        </b-modal>
    </section>
</template>

<script>
    import BreadcrumbsComponent from '../Breadcrumbs'
    import CategoriesNavigation from '../categories_nav/CategoriesNavigation';
    import ProductReviewsItem from './ProductReviewsItem';
    import ProductReviewsCreate from './ProductReviewsCreate';
    import ProductReviewsGraph from "./ProductReviewsGraph";

    export default {
        name: 'product-reviews-component',

        components: {
            'breadcrumbs-component': BreadcrumbsComponent,
            'categories_navigation': CategoriesNavigation,
            'product-reviews-item': ProductReviewsItem,
            'product-reviews-create': ProductReviewsCreate,
            'product-reviews-graph': ProductReviewsGraph
        },

        data () {
            return {
                product: {},
                rating: 0,
                packs: 'fas',
                score: true,
                icons: 'star',
                isDisabled: true,
                isModalActive: false,
            };
        },

        created () {
            this.product = this.$store.getters.getProductById(this.$route.params.id);
        },

        computed: {
            reviews () {
                return this.$store.getters.getReviewsById(this.$route.params.id);
            },
            productRating () {
                return this.$store.getters.getOverallRatingProductById(this.$route.params.id);
            },
            countReviews () {
                return this.$store.getters.getCountReviewsById(this.$route.params.id);
            },
            category () {
                return this.$store.getters.getCategoryById(this.product.category);
            },
            path () {
                return [
                    {
                        text: 'Home',
                        to: { path: '/' }
                    },
                    {
                        text: this.category ? this.category.title : '',
                        to: {
                            name: 'category-products-component',
                            params: {
                                id: this.category ? this.category.id : 0
                            }
                        }
                    },
                    {
                        text: this.product.title,
                        to: {
                            name: 'product-detail-component',
                            params: {
                                id: this.product ? this.product.id : 0
                            }
                        }
                    },
                    {
                        text: 'Reviews',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .reviews-graph {
        padding: 12px 12px 12px 25px;
    }
    .reviews-list {
        padding: 12px;
        min-height: 700px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    h3 {
        color: #363636;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.125;
        display: block;
        margin-bottom: 17px;
    }
    .review-box-1 {
        margin-bottom: 10px;
    }
    .review-box-2 {
         margin: 30px 0 10px 0;
    }
</style>