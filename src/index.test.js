import { mount } from 'vue-test-utils'
import ContentLoader from './'

test('it works', () => {
  const wrapper = mount(ContentLoader)
  expect(wrapper.isVueInstance()).toBe(true)
})
