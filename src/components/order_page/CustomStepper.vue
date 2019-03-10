<template>
    <b-tabs v-model="activeTab" position="is-centered" class="block" type="is-toggle" expanded>
        <b-tab-item v-for="(stepTab, index) in stepTabs" :label="stepTab.title" :key="index">
            <slot :name="'step' + (index + 1)">Контент для этого шага не указан</slot>

            <button v-if="(index + 1) !== stepTabs.length"
                    class="is-pulled-right button is-primary"
                    @click="activeTab = index + 1">
                Продолжить
            </button>
            <button v-else class="is-pulled-right button is-primary"
                    @click="submit()">
                {{ submitTitle }}
            </button>
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
            submitTitle: {
                type: String,
                required: true
            },
            submit: {
                type: Function,
                required: true
            }
        },
        data: function() {
          return {
              activeTab: 0
          };
        },
    };
</script>

