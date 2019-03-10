<template>
    <b-tabs v-model="activeTab" position="is-centered" class="block" type="is-toggle" expanded>
        <b-tab-item v-for="stepTab in stepTabs" :label="stepTab.title">

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
            }
        },
    };
</script>

