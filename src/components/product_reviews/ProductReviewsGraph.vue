<template>
    <div>
        <graph-stars-item
                v-for="(item, index) in infoStars"
                :key="index"
                :numberStar="item.number"
                :countStar="item.count"
                :percentStar="item.percent"/>
    </div>
</template>

<script>
    import GraphStarsItem from './GraphStarsItem';

    export default {
        name: 'product-reviews-graph-component',

        components: {
            'graph-stars-item': GraphStarsItem
        },

        props: {
            productId: {
                type: Number,
                required: true
            }
        },

        computed: {
            reviews() {
                return this.$store.getters.getReviewsById(this.productId);
            },
            infoStars() {
                let n = 5;
                let info = [];
                while(n >= 0) {
                    info.push({ count: 0, percent: 0, number: 5 - n });
                    n--;
                }

                let reviews = this.reviews;
                const length = this.reviews.length;
                reviews.forEach(value => {
                    const index = Number.parseInt(value.rating);
                    if (!Number.isNaN(index) && index >= 0 && index < info.length) {
                        info[index].count++;
                    }
                });

                let sum = 0;
                info.forEach(item => {
                    item.percent = Math.floor(100 * item.count / length);
                    sum += item.percent;
                });
                if (sum < 100) {
                    let item = info.find(value => (value.count > 0));
                    if (item) item.percent += 100 - sum;
                }
                info.shift();
                info.reverse();
                return info;
            }
        }

    }
</script>

<style scoped>

</style>