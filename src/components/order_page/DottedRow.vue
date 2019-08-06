<template>
    <div class="is-flex is-full-width order-row">
        <span class=""><b>{{ title }}: </b></span>
        <span class="dotted is-full-width"></span>
        <b v-if="value">{{ value }}</b>
        <span v-else class="has-text-danger">Не выбрано</span>
    </div>
</template>

<script>
    export default {
      name: 'dotted-row',
        props: {
            title: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
        },
    };
</script>

<style lang="scss">
    .order-row {
        white-space: nowrap;
    }
    .dotted {
        background: url(https://ideal-garderob.ru/statics/temp/icon-cart-dotted-total.png) repeat-x left 83%;
    }
</style>

