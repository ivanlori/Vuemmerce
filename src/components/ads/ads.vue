<template>
    <hooper class="carousel" :itemsToShow="3" :infiniteScroll="true">
        <slide v-for="(slide, i) in slides" :key="i" v-html="slide.content"></slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
</template>

<script>
    import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
    //import 'hooper/dist/hooper.css'
    import ADSImages from './adsimages.json'

    export default {
        name: 'ads',
        components: {
            Hooper,
            Slide,
            HooperNavigation
        },
        data () {
            return {
                slides: []      
            }
        },
        created: function() {
            for(let i = 0; i < ADSImages.length; i++) {
                this.slides[i] = {
                    content: `<div
                        style="height: 240px; width: 100%; text-align: center; background-color: #FAFAFA;
                        background-image: url(${ADSImages[i].src}); background-repeat: no-repeat; background-position: center center;">
                            ${ADSImages[i].title}
                        </div>`,
                    link: `${ADSImages[i].src}`
                }
            }
        } 
    }
</script>

<style scoped>
    .carousel {
        width: 100%;
        height: 240px;
    }

</style>
