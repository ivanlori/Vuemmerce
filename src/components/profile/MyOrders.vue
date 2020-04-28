<template>
    <div class="container">
        <div
            v-if="allOrders.length === 0"
            class="notification is-warning"
        >You have not ordered anything yet</div>
        <table v-else class="table is-fullwidth is-hoverable">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Buy date</th>
                    <th>Sum</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <template v-for="order in allOrders">
                    <tr :key="order.id" class="order-data" @click="toggleExpand(order.id)">
                        <td>{{ order.id }}</td>
                        <td>{{ order.date }}</td>
                        <td>{{ order.sum }}</td>
                        <td align="right">
                            <i
                                class="fa fa-chevron-down"
                                aria-hidden="true"
                                :ref="`chevron-${order.id}`"
                            ></i>
                        </td>
                    </tr>
                    <tr
                        :key="`products-${order.id}`"
                        :ref="`products-${order.id}`"
                        class="products-data has-background-grey-light expand"
                    >
                        <td>
                            <div class="content">
                                <ul>
                                    <li v-for="product in order.products" :key="product.id">
                                        <router-link
                                            :to="{name: 'product-detail-component', params: { id: product.id}}"
                                        >{{products[product.id].title}} - {{ products[product.id].price }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { ACTIONS } from '../../store/modules/orders/types';

export default {
    name: 'MyOrders',
    computed: {
        ...mapGetters(['allOrders', 'getProductsList']),
        products() {
            if (!this.allOrders.length || !this.getProductsList.length) {
                return {};
            }

            const products = this.allOrders
                .map(order => order.products)
                .flat(Infinity)
                .map(curProduct => {
                    const product = this.getProductsList.find(
                        ({ id }) => id === curProduct.id
                    );
                    return Object.assign({ title: product.title }, curProduct);
                })
                .map(product => [product.id, product]);

            return Object.fromEntries(products);
        }
    },
    methods: {
        ...mapActions([ACTIONS.FETCH_ALL]),
        toggleExpand(orderId) {
            const element = this.$refs[`products-${orderId}`][0];
            element.classList.toggle('expand');

            const chevron = this.$refs[`chevron-${orderId}`][0];
            chevron.classList.toggle('fa-chevron-up');
        }
    },
    created() {
        if (this.allOrders.length === 0) {
            this[ACTIONS.FETCH_ALL]();
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding-top: 2.1rem;
    padding-bottom: 2.1rem;
}

.order-data {
    cursor: pointer;
}

.products-data {
    &.expand {
        display: none;
    }

    ul {
        margin-top: 0;
    }
}
</style>