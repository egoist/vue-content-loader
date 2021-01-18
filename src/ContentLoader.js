import uid from './uid'

const ContentLoader = (props, { attrs, slots }) => {
  const idClip = props.uniqueKey ? `${props.uniqueKey}-idClip` : uid()
  const idGradient = props.uniqueKey ? `${props.uniqueKey}-idGradient` : uid()

  return (
    <svg
      {...attrs}
      viewBox={`0 0 ${props.width} ${props.height}`}
      version="1.1"
      preserveAspectRatio={props.preserveAspectRatio}
    >
      <rect
        style={{ fill: `url(${props.baseUrl}#${idGradient})` }}
        clip-path={`url(${props.baseUrl}#${idClip})`}
        x="0"
        y="0"
        width={props.width}
        height={props.height}
      />

      <defs>
        <clipPath id={idClip}>
          {slots.default ? (
            slots.default()
          ) : (
            <rect
              x="0"
              y="0"
              rx="5"
              ry="5"
              width={props.width}
              height={props.height}
            />
          )}
        </clipPath>

        <linearGradient id={idGradient}>
          <stop
            offset="0%"
            stop-color={props.primaryColor}
            stop-opacity={props.primaryOpacity}
          >
            {props.animate ? (
              <animate
                attributeName="offset"
                values="-2; 1"
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </stop>
          <stop
            offset="50%"
            stop-color={props.secondaryColor}
            stop-opacity={props.secondaryOpacity}
          >
            {props.animate ? (
              <animate
                attributeName="offset"
                values="-1.5; 1.5"
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </stop>
          <stop
            offset="100%"
            stop-color={props.primaryColor}
            stop-opacity={props.primaryOpacity}
          >
            {props.animate ? (
              <animate
                attributeName="offset"
                values="-1; 2"
                dur={`${props.speed}s`}
                repeatCount="indefinite"
              />
            ) : null}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

ContentLoader.props = {
  width: {
    type: [Number, String],
    default: 400
  },
  height: {
    type: [Number, String],
    default: 130
  },
  speed: {
    type: Number,
    default: 2
  },
  preserveAspectRatio: {
    type: String,
    default: 'xMidYMid meet'
  },
  baseUrl: {
    type: String,
    default: ''
  },
  primaryColor: {
    type: String,
    default: '#f9f9f9'
  },
  secondaryColor: {
    type: String,
    default: '#ecebeb'
  },
  primaryOpacity: {
    type: Number,
    default: 1
  },
  secondaryOpacity: {
    type: Number,
    default: 1
  },
  uniqueKey: {
    type: String
  },
  animate: {
    type: Boolean,
    default: true
  }
}

export default ContentLoader
