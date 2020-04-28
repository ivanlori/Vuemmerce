import { shallowMount } from '@vue/test-utils';
import Tabs from '../../../src/components/tabs/tabs';
import router from "../../../src/router";

const localVue = global.newVueInstance();

describe('Component Tabs', () => {
  const wrapper = shallowMount(Tabs, {
    localVue,
    router
  });

  it('contains active tab', () => {
    wrapper.setProps({
      tabs: [
        {
          title: "Test"
        }],
      selectedIndex: 1
    })

    expect(wrapper.html()).toContain('<li class="is-active"><a>Test</a></li>')
  })

  it('checks tabs path', () => {
    router.push({
      name: 'product-detail-component-tab',
      params: {
        id: 1,
        tabid: 1
      }
    })

    expect(wrapper.props().selectedIndex).toBe(1)
  })
})