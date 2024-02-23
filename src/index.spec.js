import { mount } from '@vue/test-utils'

import BulletListLoader from './BulletListLoader'
import CodeLoader from './CodeLoader'
import FacebookLoader from './FacebookLoader'
import ListLoader from './ListLoader'
import InstagramLoader from './InstagramLoader'
import ContentLoader from './ContentLoader'
import { generateViewBox } from './helpers'

describe.each([
  ['BulletListLoader', BulletListLoader],
  ['CodeLoader', CodeLoader],
  ['FacebookLoader', FacebookLoader],
  ['ListLoader', ListLoader],
  ['InstagramLoader', InstagramLoader],
])('%s', (name, component) => {
  it('renders its shapes', () => {
    const wrapper = mount(component)

    expect(
      wrapper.findAll('clipPath > *').map((c) => c.html())
    ).toMatchSnapshot()
  })

  it('forwards attributes to ContentLoader', () => {
    const wrapper = mount(component, {
      props: {
        id: 'loader',
        class: 'loader',
      },
    })

    expect(wrapper.attributes()).toMatchObject({
      id: 'loader',
      class: 'loader',
    })
  })
})

describe('ContentLoader', () => {
  it('The % width value in viewBox is processed to the default value of 400', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        width: '100%',
        height: '50',
      },
    })
    expect(wrapper.attributes()).toMatchObject({
      width: '100%',
      height: '50',
      viewBox: '0 0 400 50',
    })
  })

  it('The width and height values of px units in viewBox are removed', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        width: '100px',
        height: '50PX',
      },
    })
    expect(wrapper.attributes()).toMatchObject({
      width: '100px',
      height: '50PX',
      viewBox: '0 0 100 50',
    })
  })
})

describe('helpers test', () => {
  it('generateViewBox', () => {
    expect(generateViewBox(100, 100)).toBe('0 0 100 100')
    expect(generateViewBox('100px', 100)).toBe('0 0 100 100')
    expect(generateViewBox('100%', 100)).toBe('0 0 400 100')
    expect(generateViewBox(100, '10em')).toBe('0 0 100 130')
    expect(generateViewBox()).toBe('0 0 400 130')
    expect(generateViewBox(0, 0)).toBe('0 0 0 0')
  })
})
