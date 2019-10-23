import { mount } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import component from '../../../src/components/categories_nav/CategoriesNavigation.vue';
import store from '../../../src/store';
import router from '../../../src/router';

const localVue = global.newVueInstance();

describe('CategoriesNavigation.vue', async () => {
	it('mounts successfully', () => {
		const wrapper = mount(component, {
			localVue,
			router,
			store
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('snapshot renderer test', () => {
		const renderer = createRenderer();
		const wrapper = mount(component, {
			localVue,
			router,
			store,
			propsData: { id: 1 }
		});
		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) throw new Error(err);
			expect(str).toMatchSnapshot();
		});
	});
});
