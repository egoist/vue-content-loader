import ContentLoader from './ContentLoader'

export default {
  name: 'BarChartLoader',
  functional: true,
  render(h, { data }) {
    return (
      <ContentLoader {...data} height={150}>
        <rect x="145" y="10" rx="2" ry="2" width="5" height="140" />
        <rect x="145" y="25" rx="2" ry="2" width="120" height="15" />
        <rect x="145" y="45" rx="2" ry="2" width="90" height="15" />
        <rect x="145" y="65" rx="2" ry="2" width="50" height="15" />
        <rect x="130" y="85" rx="2" ry="2" width="20" height="15" />
        <rect x="100" y="105" rx="2" ry="2" width="50" height="15" />
        <rect x="60" y="125" rx="2" ry="2" width="90" height="15" />
      </ContentLoader>
    )
  }
}
