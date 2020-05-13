<template>
    <div>
        <h3>Price</h3>
        <b-field>
            <b-slider v-model="priceRange" :step="1" :min=minPrice :max=maxPrice >
            </b-slider>
        </b-field>
        <h3 class="block">Brands</h3>
        <div class="block">
            <div>
                <div v-for="brand in brands">
                    <b-checkbox v-model="selectedBrands"
                                :key="brand.id"
                                :native-value="brand.id">{{brand.title}}</b-checkbox>
                </div>
            </div>
        </div>
        <div class="columns block">
            <div class="column is-half">
                <b-button @click="applyFilter">Apply filter</b-button>
            </div>
            <div class="column is-half">
                <b-button @click="removeFilter">Remove filter</b-button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "category-products-filter",
        methods: {
            pseudoLoadingPage() {
                this.$store.dispatch('pseudoGetCategoryMaxPrice',
                    this.$route.params.id).then(maxPrice => {
                    this.maxPrice= maxPrice;
                });
                if (this.brands.length === 0) {
                    this.$store.dispatch('pseudoFetchBrands').then(brands => {
                        this.brands = brands;
                    });
                }
            },
            applyFilter() {
                this.$router.push({
                    query: {
                        brands: this.selectedBrands,
                        priceFrom: this.priceRange[0],
                        priceTo: this.priceRange[1]
                    }
                })
            },
            removeFilter() {
                this.$router.replace({
                    query: {
                    }
                })
            }
        },
        mounted() {
            this.pseudoLoadingPage();
        },
        data() {
            return {
                minPrice: 0,
                maxPrice: 0,
                selectedBrands: [],
                brands: []
            }
        },
        watch: {
            maxPrice: function(newVal, oldVal) {
                this.priceRange = [this.minPrice, this.maxPrice];
            },
            $route(to, from) {
                this.pseudoLoadingPage();
            }
        },
    }
</script>

<style scoped>
</style>
