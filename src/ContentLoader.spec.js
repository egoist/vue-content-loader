import { mount } from '@vue/test-utils'
import ContentLoader from './ContentLoader'

describe('ContentLoader', () => {
  it('has default values for props', () => {
    const wrapper = mount(ContentLoader)

    expect(wrapper.vm.width).toBe(undefined)
    expect(wrapper.vm.height).toBe(undefined)
    expect(wrapper.vm.speed).toBe(2)
    expect(wrapper.vm.preserveAspectRatio).toBe('xMidYMid meet')
    expect(wrapper.vm.baseUrl).toBe('')
    expect(wrapper.vm.primaryColor).toBe('#f9f9f9')
    expect(wrapper.vm.secondaryColor).toBe('#ecebeb')
    expect(wrapper.vm.primaryOpacity).toBe(1)
    expect(wrapper.vm.secondaryOpacity).toBe(1)
    expect(wrapper.vm.uniqueKey).toBe(undefined)
    expect(wrapper.vm.animate).toBe(true)
  })

  it('has viewbox, version and aspect ratio attributes on svg element', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        width: 300,
        height: 200,
        preserveAspectRatio: 'xMaxYMid slice'
      }
    })

    expect(wrapper.find('svg').attributes()).toEqual({
      width: '300',
      height: '200',
      preserveAspectRatio: 'xMaxYMid slice',
      version: '1.1',
      viewBox: '0 0 300 200'
    })
  })

  it('has viewbox, version and aspect ratio attributes on svg element', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        width: 300,
        height: 200,
        preserveAspectRatio: 'xMaxYMid slice'
      }
    })

    expect(wrapper.find('svg').attributes()).toEqual({
      width: '300',
      height: '200',
      preserveAspectRatio: 'xMaxYMid slice',
      version: '1.1',
      viewBox: '0 0 300 200'
    })
  })

  it('draws a rect filled by the gradient and clipped by the shapes', () => {
    const wrapper = mount(ContentLoader)

    expect(wrapper.find('rect').attributes()).toEqual({
      style: `fill: url(#${wrapper.vm.idGradient});`,
      'clip-path': `url(#${wrapper.vm.idClip})`,
      x: '0',
      y: '0',
      width: '100%',
      height: '100%'
    })
  })

  it('draws a clipPath with a unique ID', () => {
    const wrapper = mount(ContentLoader)

    expect(wrapper.find('defs clipPath').attributes()).toEqual({
      id: wrapper.vm.idClip
    })
  })

  it('draws a linear gradient with a unique ID', () => {
    const wrapper = mount(ContentLoader)

    expect(wrapper.find('defs linearGradient').attributes()).toEqual({
      id: wrapper.vm.idGradient
    })
  })

  it('draws a linear gradient with 3 stops', () => {
    const wrapper = mount(ContentLoader)
    const stops = wrapper.findAll('defs linearGradient stop')

    expect(stops.length).toBe(3)
    expect(stops[0].attributes()).toEqual({
      offset: '0%',
      'stop-color': '#f9f9f9',
      'stop-opacity': '1'
    })
    expect(stops[1].attributes()).toEqual({
      offset: '50%',
      'stop-color': '#ecebeb',
      'stop-opacity': '1'
    })
    expect(stops[2].attributes()).toEqual({
      offset: '100%',
      'stop-color': '#f9f9f9',
      'stop-opacity': '1'
    })
  })

  it('animates the gradient by default using given speed', () => {
    const wrapper = mount(ContentLoader)
    const animations = wrapper.findAll('defs linearGradient animate')

    expect(animations.length).toBe(3)
    expect(animations[0].attributes()).toEqual({
      attributeName: 'offset',
      values: '-2; 1',
      dur: '2s',
      repeatCount: 'indefinite'
    })
    expect(animations[1].attributes()).toEqual({
      attributeName: 'offset',
      values: '-1.5; 1.5',
      dur: '2s',
      repeatCount: 'indefinite'
    })
    expect(animations[2].attributes()).toEqual({
      attributeName: 'offset',
      values: '-1; 2',
      dur: '2s',
      repeatCount: 'indefinite'
    })
  })

  it('does not animate if animate prop is false', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        animate: false
      }
    })

    expect(wrapper.findAll('defs linearGradient animate').length).toBe(0)
  })

  it('has a default element to clip with', () => {
    const wrapper = mount(ContentLoader)

    expect(wrapper.find('defs clipPath rect').attributes()).toEqual({
      x: '0',
      y: '0',
      rx: '5',
      ry: '5',
      width: '100%',
      height: '100%'
    })
  })

  it('outputs the default slot within the clipPath', () => {
    const wrapper = mount(ContentLoader, {
      slots: {
        default: '<circle cx="30" cy="30" r="30" />'
      }
    })

    expect(wrapper.find('defs clipPath circle').html()).toEqual(
      '<circle cx="30" cy="30" r="30"></circle>'
    )
  })

  it('use the baseUrl to link the gradient & clip path', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        baseUrl: '/path'
      }
    })

    expect(wrapper.find('rect').attributes()).toMatchObject({
      style: `fill: url(/path#${wrapper.vm.idGradient});`,
      'clip-path': `url(/path#${wrapper.vm.idClip})`
    })
  })

  it('use the uniqueKey to generate static IDs', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        uniqueKey: 'unique'
      }
    })

    expect(wrapper.vm.idClip).toEqual('unique-idClip')
    expect(wrapper.vm.idGradient).toEqual('unique-idGradient')
  })

  it('apply extra attributes on the root element', () => {
    const wrapper = mount(ContentLoader, {
      props: {
        class: 'loader',
        id: 'loader'
      }
    })

    expect(wrapper.find('svg').classes()).toEqual(['loader'])
    expect(wrapper.find('svg').attributes()).toMatchObject({ id: 'loader' })
  })
})
