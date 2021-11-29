import { createStorybook } from './storybook'
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader,
} from '../src'

const Container = {
  functional: true,
  render() {
    return (
      <div style={{ width: '400px', margin: '0 auto' }}>
        {this.$slots.default()}
      </div>
    )
  },
}

const MyLoader = {
  render() {
    return (
      <ContentLoader
        height={140}
        speed={1}
        primaryColor={'#333'}
        secondaryColor={'#999'}
      >
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="82" y="44" rx="3" ry="3" width="250" height="10" />
        <circle cx="35" cy="35" r="35" />
      </ContentLoader>
    )
  },
}

const storybook = createStorybook({
  title: 'vue-content-loader',
})

const section = storybook.addSection({
  title: 'ContentLoader',
})

section
  .addStory({
    title: 'facebook style',
    component: {
      render() {
        return (
          <Container>
            <FacebookLoader />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'instagram style',
    component: {
      render() {
        return (
          <Container>
            <InstagramLoader />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'code style',
    component: {
      render() {
        return (
          <Container>
            <CodeLoader />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'list style',
    component: {
      render() {
        return (
          <Container>
            <ListLoader />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'bullet list style',
    component: {
      render() {
        return (
          <Container>
            <BulletListLoader />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'custom style',
    component: {
      render() {
        return (
          <Container>
            <MyLoader />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'className',
    component: {
      render() {
        return (
          <Container>
            <ContentLoader class="random-className" />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'width and height',
    component: {
      render() {
        return (
          <Container>
            <ContentLoader width={200} height={100} />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'custom viewBox',
    component: {
      render() {
        return (
          <Container>
            <ContentLoader viewBox="0 0 250 110">
              <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
              <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
              <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
              <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
              <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
              <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
            </ContentLoader>
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'unique-key: for SSR',
    component: {
      render() {
        return (
          <Container>
            <ContentLoader uniqueKey="unique-key" />
          </Container>
        )
      },
    },
  })
  .addStory({
    title: 'no animation',
    component: {
      render() {
        return (
          <Container>
            <FacebookLoader animate={false} />
          </Container>
        )
      },
    },
  })

storybook.open('#app')
