import db from './fakeDb';
import { MUTATIONS, ACTIONS } from './types';

export const state = {
    orders: [],
};

/**
 * @type {import('vuex').MutationTree<state>}
 */
export const mutations = {
    [MUTATIONS.SET_ALL](state, orders) {
        state.orders = orders;
    },
    [MUTATIONS.ADD](state, order) {
        state.orders.push(order);
    },
};

/**
 * @type {import('vuex').ActionTree<state>}
 */
export const actions = {
    async [ACTIONS.FETCH_ALL]({ commit }) {
        const orders = await db.getOrders();
        commit(MUTATIONS.SET_ALL, orders);
    },
    async [ACTIONS.CREATE]({ commit }, payload) {
        const order = await db.create(payload);
        commit(MUTATIONS.ADD, order);
        return order;
    }
};

/**
 * @type {import('vuex').GetterTree<state>}
 */
export const getters = {
    orders: ({ orders }) => orders,
};

export default { state, mutations, actions, getters };