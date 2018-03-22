import { storiesOf } from '@storybook/vue'
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

storiesOf('ContentLoader', module)
  .add('facebook style', () => ({
    render() {
      return (
        <Container>
          <FacebookLoader />
        </Container>
      )
    }
  }))
  .add('instagram style', () => ({
    render() {
      return (
        <Container>
          <InstagramLoader />
        </Container>
      )
    }
  }))
  .add('code style', () => ({
    render() {
      return (
        <Container>
          <CodeLoader />
        </Container>
      )
    }
  }))
  .add('list style', () => ({
    render() {
      return (
        <Container>
          <ListLoader />
        </Container>
      )
    }
  }))
  .add('bullet list style', () => ({
    render() {
      return (
        <Container>
          <BulletListLoader />
        </Container>
      )
    }
  }))
  .add('custom style', () => ({
    render() {
      return (
        <Container>
          <MyLoader />
        </Container>
      )
    }
  }))
  .add('className', () => ({
    render() {
      return (
        <Container>
          <ContentLoader class="random-className" />
        </Container>
      )
    }
  }))
  .add('width and height', () => ({
    render() {
      return (
        <Container>
          <ContentLoader width={400} height={150} />
        </Container>
      )
    }
  }))
  .add('unique-key: for SSR', () => ({
    render() {
      return (
        <Container>
          <ContentLoader uniqueKey="unique-key" />
        </Container>
      )
    }
  }))
  .add('no animation', () => ({
    render() {
      return (
        <Container>
          <FacebookLoader animate={false} />
        </Container>
      )
    }
  }))
