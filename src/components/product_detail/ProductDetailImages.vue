<template>
    <div>
        <hooper class="carousel" :itemsToShow="4" :infiniteScroll="true">
            <slide v-for="(slide, i) in slides" :key="i" v-html="slide.content"></slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
</template>

<script>
    import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'

    export default {
        name: 'product-detail-images-component',
        components: {
            Hooper,
            Slide,
            HooperNavigation
        },
        props: {
            productId: {
                type: Number,
                required: true
            }
        },
        data () {
            return {
                slides: []
            }
        },
        created () {
            const productImages = this.$store.getters.getProductImages(this.productId);
            for(let i = 0; i < productImages.length; i++) {
                this.slides[i] = {
                    content: `<div
                        style="height: 128px; width: 100%; text-align: center; background-color: #FAFAFA;
                        background-image: url(${productImages[i].src}); background-repeat: no-repeat; background-position: center center;">
                            ${productImages[i].title}
                        </div>`,
                    link: `${productImages[i].src}`
                }
            }
        } 
    }
</script>

<style scoped>
    .carousel-placeholder {
        width: 480px;
        height: 128px;
        background-color: #FBFBFB;
    }
    .carousel {
        width: 480px;
        height: 128px;
    }
</style>
