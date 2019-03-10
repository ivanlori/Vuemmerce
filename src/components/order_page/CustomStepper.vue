<template>
    <b-tabs v-model="activeTab" position="is-centered" class="block" type="is-toggle" expanded>
        <b-tab-item v-for="(stepTab, index) in stepTabs" :label="stepTab.title">
            <slot :name="'step' + (index + 1)">dddd</slot>
        </b-tab-item>
    </b-tabs>
</template>

<script>
    export default {
      name: 'custom-stepper',
        props: {
            stepTabs: {
                type: Array,
                required: true
            },
            activeTab: {
                type: Number,
                required: true
            }
        }
    };
</script>

