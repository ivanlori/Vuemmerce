import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ordersModule from '../../../src/store/modules/orders';
import { ACTIONS } from '../../../src/store/modules/orders/types';

/**
 * @type {import('vue').VueConstructor}
 */
const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    modules: { orders: ordersModule }
});

describe('"Orders" store module', () => {

    describe('actions', () => {
        it('"fetch all orders" should get all orders or []', async () => {
            expect(store.getters.allOrders.length).toBe(0);
            await store.dispatch(ACTIONS.FETCH_ALL);
            expect(store.getters.allOrders.length).toBeGreaterThanOrEqual(0);
        });

        it('"create order" should create new order and return it with id', async () => {
            const prevLen = store.getters.allOrders.length;
            const lastOrder = store.getters.allOrders[prevLen - 1];
            await store.dispatch(ACTIONS.CREATE, {});
            expect(store.getters.allOrders.length).toBe(prevLen + 1);
            expect(store.getters.allOrders[prevLen].id).toBe(lastOrder.id + 1);
        });
    });
});