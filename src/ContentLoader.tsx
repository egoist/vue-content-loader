import { defineComponent, computed } from 'vue'
import { removePixelUnit, isNumberLike } from './helpers'
import uid from './uid'

export default defineComponent({
  name: 'ContentLoader',

  props: {
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
    viewBox: {
      type: String,
    },
    preserveAspectRatio: {
      type: String,
      default: 'xMidYMid meet',
    },
    speed: {
      type: Number,
      default: 2,
    },
    baseUrl: {
      type: String,
      default: '',
    },
    primaryColor: {
      type: String,
      default: '#f9f9f9',
    },
    secondaryColor: {
      type: String,
      default: '#ecebeb',
    },
    primaryOpacity: {
      type: Number,
      default: 1,
    },
    secondaryOpacity: {
      type: Number,
      default: 1,
    },
    uniqueKey: {
      type: String,
    },
    animate: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const idClip = computed(() =>
      props.uniqueKey ? `${props.uniqueKey}-idClip` : uid()
    )
    const idGradient = computed(() =>
      props.uniqueKey ? `${props.uniqueKey}-idGradient` : uid()
    )
    const computedViewBox = computed(() => {
      let width = removePixelUnit(props.width)
      width = isNumberLike(width) ? width : 400
      let height = removePixelUnit(props.height)
      height = isNumberLike(height) ? height : 130
      return props.viewBox ?? `0 0 ${width} ${height}`
    })

    return {
      idClip,
      idGradient,
      computedViewBox,
    }
  },

  render() {
    return (
      <svg
        width={this.width}
        height={this.height}
        viewBox={this.computedViewBox}
        version="1.1"
        preserveAspectRatio={this.preserveAspectRatio}
      >
        <rect
          style={{ fill: `url(${this.baseUrl}#${this.idGradient})` }}
          clip-path={`url(${this.baseUrl}#${this.idClip})`}
          x="0"
          y="0"
          width="100%"
          height="100%"
        />

        <defs>
          <clipPath id={this.idClip}>
            {this.$slots.default ? (
              this.$slots.default()
            ) : (
              <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            )}
          </clipPath>

          <linearGradient id={this.idGradient}>
            <stop
              offset="0%"
              stop-color={this.primaryColor}
              stop-opacity={this.primaryOpacity}
            >
              {this.animate ? (
                <animate
                  attributeName="offset"
                  values="-2; 1"
                  dur={`${this.speed}s`}
                  repeatCount="indefinite"
                />
              ) : null}
            </stop>
            <stop
              offset="50%"
              stop-color={this.secondaryColor}
              stop-opacity={this.secondaryOpacity}
            >
              {this.animate ? (
                <animate
                  attributeName="offset"
                  values="-1.5; 1.5"
                  dur={`${this.speed}s`}
                  repeatCount="indefinite"
                />
              ) : null}
            </stop>
            <stop
              offset="100%"
              stop-color={this.primaryColor}
              stop-opacity={this.primaryOpacity}
            >
              {this.animate ? (
                <animate
                  attributeName="offset"
                  values="-1; 2"
                  dur={`${this.speed}s`}
                  repeatCount="indefinite"
                />
              ) : null}
            </stop>
          </linearGradient>
        </defs>
      </svg>
    )
  },
})
