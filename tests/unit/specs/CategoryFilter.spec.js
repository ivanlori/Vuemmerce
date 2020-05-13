import { mount } from '@vue/test-utils';
import component from '../../../src/components/categories/CategoryProductsFilter';
import store from '../../../src/store';
import router from '../../../src/router';

const localVue = global.newVueInstance();

describe('CategoryProductsFilter.vue', async () => {
    it('mounts successfully', () => {
        const wrapper = mount(component, {
            localVue,
            router,
            store
        });
        expect(wrapper.exists()).toBe(true);
    });

    const $route = {
        path: '/some/path'
    }

    it('applyFilter method changes url', () => {
        const wrapper = mount(component, {
            localVue,
            router,
            store
        });
        wrapper.setData({
            minPrice: 0,
            maxPrice: 100,
            selectedBrands: [1, 2, 3, 4, 5]
        });

        wrapper.vm.applyFilter();
        expect(wrapper.vm.$route.fullPath).toBe('/?brands=1&brands=2&brands=3&brands=4&brands=5&priceFrom=0&priceTo=100')
    });

    it('removeFilter method clears url', () => {
        const $route = {
            path: '/?brands=1&brands=2&brands=3&brands=4&brands=5&priceFrom=0&priceTo=100'
        };

        const wrapper = mount(component, {
            localVue,
            router,
            store,
            mocks: {
                $route
            }
        });
        wrapper.setData({
            minPrice: 0,
            maxPrice: 100,
            selectedBrands: [1, 2, 3, 4, 5]
        });

        wrapper.vm.removeFilter();
        expect(wrapper.vm.$route.fullPath).toBe('/')
    });
});
