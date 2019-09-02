import { shallowMount, mount } from "@vue/test-utils";
import { createRenderer } from 'vue-server-renderer'
import component from "../../../src/components/ads/ads.vue";
import store from "../../../src/store";
import router from "../../../src/router";

const localVue = global.newVueInstance();

describe('ads.vue', async () => {
  it('mounts without error', () => {
    const wrapper = mount(component, { localVue });

    let element = wrapper.find('.hooper');
    expect(element).toBeTruthy();

    let slides = wrapper.findAll('.hooper-slide.is-active');
    expect(slides.length).toBe(3);
    
    let navigation = wrapper.findAll('.hooper-navigation');
    expect(navigation).toBeTruthy();

    expect(wrapper.vm.slides.length).toBe(4);

  });

  it('snapshot renderer test', () => {
    const renderer = createRenderer()
    const wrapper = mount(component, {
       localVue,
       router,
       store,
   });
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    });
  });
});
