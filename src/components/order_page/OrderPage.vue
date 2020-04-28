<!--suppress XmlUnboundNsPrefix -->
<template>
    <div class="order-page">
        <custom-stepper
                :step-tabs="[
                    {title: 'Выбор способа оплаты'},
                    {title: 'Выбор адреса и времени доставки'},
                    {title: 'Выберите удобное для вас время доставки'},
                ]"
                submitTitle="Завершить оформление заказа"
                :submit="checkOrder">

            <template v-slot:step1>
                <p class="content">
                    <b>Выберите способ оплаты:</b>
                </p>
                <b-field v-for="payTypeItem in payTypeList" :key="payType.code">
                    <b-radio v-model="payType" size="is-medium" :native-value="payTypeItem.code">
                        <div class="is-flex is-vertical-center">
                            <figure class="image is-64x64">
                                <img :src="payTypeItem.icon">
                            </figure>
                            <b class="has-margin-left-10">{{ payTypeItem.title }}</b>
                        </div>
                    </b-radio>
                </b-field>
            </template>

            <template v-slot:step2>
                <b-field label="Город доставки"
                         :type="formNeedValidate && !searchCity ? 'is-danger' : ''"
                         message="Это поле обязательно к заполнению">
                    <city-autocomplete @select="val => searchCity = val" />
                </b-field>
                <b-field label="Адрес доставки"
                         :type="formNeedValidate && !address ? 'is-danger' : ''"
                         message="Это поле обязательно к заполнению">
                    <b-input v-model="address"></b-input>
                </b-field>
                <div class="is-flex is-full-width">
                    <b-field label="Выберите дату доставки" class="is-full-width"
                             :type="formNeedValidate && !dateShipping ? 'is-danger' : ''"
                             message="Это поле обязательно к заполнению">
                        <b-datepicker v-model="dateShipping"
                                      :first-day-of-week="1"
                                      :min-date="new Date()"
                                      :keep-first="true"
                                      placeholder="Кликните для выбора даты...">
                            <button class="button is-primary"
                                    @click="dateShipping = new Date()">
                                <b-icon icon="calendar-today"></b-icon>
                                <span>Сегодня</span>
                            </button>
                            <button class="button is-danger"
                                    @click="dateShipping = null">
                                <b-icon icon="close"></b-icon>
                                <span>Очистить</span>
                            </button>
                        </b-datepicker>
                    </b-field>
                    <b-field label="Выберите удобное для вас время доставки" class="has-margin-left-20 is-full-width">
                        <b-timepicker
                                v-model="timeShipping"
                                placeholder="Кликните для выбора времени..."></b-timepicker>
                    </b-field>
                </div>
            </template>

            <template v-slot:step3>
                <h3>Проверьте введенные данные: </h3>
                <div class="order-row-list">
                    <dotted-row title="Способ оплаты" :value="selectedPayTypeTitle" />
                    <dotted-row title="Город доставки" :value="searchCity" />
                    <dotted-row title="Адрес доставки" :value="address" />
                    <dotted-row title="Дата доставки" :value="deliveryDateTime" />
                </div>
            </template>

        </custom-stepper>

        <b-modal :active.sync="isShowModal" @close="() => $router.push('/')">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Заказ оформлен</p>
                </header>
                <section class="modal-card-body">
                    Спасибо за заказ!
                </section>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import moment from 'moment';
    import DottedRow from "./DottedRow";
    import CustomStepper from "./CustomStepper";
    import CityAutocomplete from "./CityAutocomplete";

    export default {
        components: {
            CityAutocomplete,
            DottedRow,
            CustomStepper,
        },
      name: 'order-page',
        data () {
            return {
                formNeedValidate: false,
                payType: "cash",
                payTypeList: [
                    { title: "Наличными", code: "cash",  "icon": "https://rentavto.ru/wp-content/uploads/2017/11/52240963.2yf2mccjit.W665.png" },
                    { title: "Банковкой картой", code: "card", "icon": "http://city4g.ru/wa-data/public/shop/img/cash_oplata.png" },
                ],
                searchCity: '',
                address: '',
                dateShipping: moment().toDate(),
                timeShipping: moment().toDate(),
                isShowModal: false,
            };
        },
        computed: {
            selectedPayTypeTitle: function () {
                const type = this.payTypeList.find(payTypeItem => payTypeItem.code === this.payType);
                return type ? type.title : null;
            },
            deliveryDateTime: function () {
                const formattedDate = moment(this.dateShipping).format('D/MM/YY');
                const formattedTime = moment(this.timeShipping).format('HH:mm');
                return `${formattedDate} ${formattedTime}`;
            }
        },
        methods: {
            checkOrder: function () {
                if (!this.selectedPayTypeTitle) return false;
                if (!this.searchCity) return false;
                if (!this.address) return false;
                if (!this.dateShipping) return false;

                this.isShowModal = true;
            },
            danger(text) {
                this.$snackbar.open({
                    duration: 2000,
                    message: `Ошибка: ${text}`,
                    type: 'is-danger',
                    position: 'is-bottom-right'
                })
            }
        },
        metaInfo: {
            title: 'Vuemmerce | Order',
        },
    };
</script>

<style lang="scss">
    .order-row-list {
        margin: 40px;
        > * {
            margin-bottom: 10px;
        }
    }
    .order-page {
        width: 60%;
        min-height: 300px;
        margin: 40px auto;
    }
    .is-vertical-center {
        display: flex;
        align-items: center;
    }
    .tab-content {
        overflow: visible!important;
    }
    .dotted {
        background: url('/assets/icon-dotted.png') repeat-x left 83%;
    }
</style>
