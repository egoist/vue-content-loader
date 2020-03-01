import { createStorybook } from './storybook'
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader
} from '../src'

const Container = {
  functional: true,
  render(h, { children }) {
    return <div style={{ width: '400px', margin: '0 auto' }}>{children}</div>
  }
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
  }
}

const storybook = createStorybook({
  title: 'vue-content-loader'
})

const section = storybook.addSection({
  title: 'ContentLoader'
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
      }
    }
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
      }
    }
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
      }
    }
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
      }
    }
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
      }
    }
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
      }
    }
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
      }
    }
  })
  .addStory({
    title: 'width and height',
    component: {
      render() {
        return (
          <Container>
            <ContentLoader width={400} height={150} />
          </Container>
        )
      }
    }
  })
  .addStory({
    title: 'responsive size',
    component: {
      render() {
        return (
          <Container>
            <ContentLoader
              width={{
                viewBox: 300, // original svg draw size
                '<800': 200,
                '<600': 100,
                '>900': 280,
                '>1000': 400,
              }} height={150}
              primaryColor={'#333'}
              secondaryColor={'#999'} />
          </Container>
        )
      }
    }
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
      }
    }
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
      }
    }
  })

storybook.open('#app')
