<template>
    <div class="graph-stars-item">
        <div class="gsi-1">
            {{ number }} stars
        </div>
        <div class="gsi-2">
            <div class="gsi-color" :style="styleValue"></div>
        </div>
        <div class="gsi-3">
            {{ percent }}%
        </div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "graph-stars-item-component",

        props: {
            numberStar: 0,
            countStar: 0,
            percentStar: 0
        },

        computed: {
            number() {
                return this.numberStar;
            },
            count() {
                return this.countStar;
            },
            percent() {
                return this.percentStar;
            },
            styleValue() {
                return { 'width': this.percent + '%' };
            }
        }

    }
</script>

<style scoped>
    .graph-stars-item {
        margin-bottom: 4px;
        height: 20px;
    }
    .graph-stars-item > div {
        float: left;
        margin-right: 10px;
    }
    .graph-stars-item .gsi-2 {
        width: 120px;
        margin-top: 3px;
        font-size: 0;
        border-radius: 1px;
        box-shadow: inset 0 1px 2px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.1);
        overflow: hidden;
        background: #f2f2f2;
        background: -webkit-linear-gradient(top,#eee,#f6f6f6);
        background: linear-gradient(to bottom,#eee,#f6f6f6);
        background-color: #f3f3f3;
        height: 17px;
    }
    .graph-stars-item .gsi-2 .gsi-color {
        height: 100%;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), inset 0 -1px 0 rgba(0,0,0,.05);
        border-radius: 1px;
        background-color: #ffce00;
    }
    .graph-stars-item > div:last-child {
        clear:both;
    }

</style>