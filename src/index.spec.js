import { mount } from '@vue/test-utils'

import BulletListLoader from './BulletListLoader'
import CodeLoader from './CodeLoader'
import FacebookLoader from './FacebookLoader'
import ListLoader from './ListLoader'
import InstagramLoader from './InstagramLoader'

describe.each([
  ['BulletListLoader', BulletListLoader],
  ['CodeLoader', CodeLoader],
  ['FacebookLoader', FacebookLoader],
  ['ListLoader', ListLoader],
  ['InstagramLoader', InstagramLoader]
])('%s', (name, component) => {
  it('renders its shapes', () => {
    const wrapper = mount(component)

    expect(wrapper.findAll('clipPath > *').map(c => c.html())).toMatchSnapshot()
  })

  it('forwards attributes to ContentLoader', () => {
    const wrapper = mount(component, {
      props: {
        id: 'loader',
        class: 'loader'
      }
    })

    expect(wrapper.attributes()).toMatchObject({
      id: 'loader',
      class: 'loader'
    })
  })
})
