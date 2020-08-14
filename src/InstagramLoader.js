import ContentLoader from './ContentLoader'

export default {
  name: 'InstagramLoader',
  functional: true,
  render(h, { data }) {
    return (
      <ContentLoader {...data} height={480}>
        <circle cx="20" cy="32" r="10.5" />

        <rect x="40" y="27" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
        <rect x="0" y="470" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="485" rx="2" ry="2" width="250" height="10" />
        <rect x="0" y="500" rx="2" ry="2" width="110" height="10" />
        <rect x="0" y="515" rx="2" ry="2" width="180" height="10" />
        <rect x="0" y="530" rx="2" ry="2" width="170" height="10" />
      </ContentLoader>
    )
  }
}
