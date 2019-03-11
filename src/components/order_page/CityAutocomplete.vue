<template>
    <b-autocomplete
            v-model="searchCity"
            :data="suggestCityList"
            placeholder="Начните вводить город...">
        <template slot="empty">Ничего не найдено</template>
    </b-autocomplete>
</template>

<script>
    export default {
        data: function() {
            return {
                searchCity: '',
                suggestCityList: [],
            };
        },
        watch: {
            searchCity(val) {
                this.$emit('select', val);
                fetch(`http://localhost:3001/kladr-api?query=${val}`)
                    .then(res => res.json())
                    .then(res => this.suggestCityList = res.result.map(item => item.name))
                    .catch(err => this.danger(err));
            }
        }
    };
</script>

