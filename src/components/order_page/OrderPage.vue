<template>
    <div class="order-page">
        <b-tabs v-model="activeTab" position="is-centered" class="block" type="is-toggle" expanded>
            <b-tab-item label="Выбор способа оплаты">
                <p class="content">
                    <b>Выберите способ оплаты:</b>
                </p>
                <b-field v-for="payTypeItem in payTypeList">
                    <b-radio v-model="payType" size="is-medium" :native-value="payTypeItem.code">
                        <div class="is-flex is-vertical-center">
                            <figure class="image is-64x64">
                                <img :src="payTypeItem.icon">
                            </figure>
                            <b class="has-margin-left-10">{{ payTypeItem.title }}</b>
                        </div>
                    </b-radio>
                </b-field>
                <button class="is-pulled-right button is-primary" @click="toStep(2)">Продолжить</button>
            </b-tab-item>


            <b-tab-item label="Выбор адреса и времени доставки" :disabled="orderStep < 2">
                <b-field label="Адрес доставки">
                    <b-autocomplete
                            v-model="search"
                            :data="suggestCityList"
                            placeholder="Начните вводить город...">
                        <template slot="empty">Ничего не найдено</template>
                    </b-autocomplete>
                </b-field>
                <div class="is-flex is-full-width">
                    <b-field label="Выберите дату доставки" class="is-full-width">
                        <b-datepicker v-model="date"
                                      :first-day-of-week="1"
                                      placeholder="Кликните для выбора даты...">
                            <button class="button is-primary"
                                    @click="date = new Date()">
                                <b-icon icon="calendar-today"></b-icon>
                                <span>Сегодня</span>
                            </button>
                            <button class="button is-danger"
                                    @click="date = null">
                                <b-icon icon="close"></b-icon>
                                <span>Очистить</span>
                            </button>
                        </b-datepicker>
                    </b-field>
                    <b-field label="Выберите удобное для вас время доставки" class="has-margin-left-20 is-full-width">
                        <b-timepicker
                                v-model="time"
                                placeholder="Кликните для выбора времени..."></b-timepicker>
                    </b-field>
                </div>

                <button class="is-pulled-right button is-primary" @click="toStep(3)">Продолжить</button>
            </b-tab-item>


            <b-tab-item label="Подтверждение выбранных условий" :disabled="orderStep < 3">

            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
    export default {
      name: 'order-page',
        data () {
            return {
                activeTab: 0,
                orderStep: 1,
                payType: "cash",
                payTypeList: [
                    { title: "Наличными", code: "cash",  "icon": "https://rentavto.ru/wp-content/uploads/2017/11/52240963.2yf2mccjit.W665.png" },
                    { title: "Банковкой картой", code: "card", "icon": "http://city4g.ru/wa-data/public/shop/img/cash_oplata.png" },
                ],
                search: null,
                suggestCityList: [],
                timeShipping: new Date(),
                dateShipping: new Date(),
            };
        },
        methods: {
            toStep: function(stepNum) {
                this.orderStep = stepNum;
                this.activeTab = stepNum - 1;
            }
        },
        watch: {
            search(val) {
                if (this.isLoading) return;

                this.isLoading = true;

                fetch(`http://localhost:3001/kladr-api?query=${val}`)
                    .then(res => res.json())
                    .then(res => {
                        this.suggestCityList = res.result.map(item => item.name);
                        console.log('suggestCityList', this.suggestCityList);
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false));
          }
        }
    };
</script>

<style lang="scss">
    .order-page {
        width: 60%;
        margin: 40px auto;

    }

    .is-vertical-center {
        display: flex;
        align-items: center;
    }

    .tab-content {
        overflow: visible!important;
    }
</style>

