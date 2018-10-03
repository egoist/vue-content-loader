import ContentLoader from './ContentLoader'

export default {
  name: 'LineChartLoader',
  functional: true,
  render(h, { data }) {
    return (
      <ContentLoader {...data}>
         <rect x="20" y="0" rx="3" ry="3" width="5" height="80" />
         <path d="M 20 20 C 120 43 112 -30 152 41 C 175 80 193 50 207 26 C 231 -19 245 68 300 20 C 318 3 334 6 350 15 L350 100 L20 100" />
      </ContentLoader>
    )
  }
}
