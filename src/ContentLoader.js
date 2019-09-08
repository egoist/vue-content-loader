import uid from './uid'

const defaultWidth = 400;
const defaultHeight = 130;

const getViewBoxSize = (param, _default) =>
      typeof param === 'number' ? param :
        'viewBox' in param ?
          param.viewBox : _default;

const matchContainerSize = (value, who) => {
      
  if(typeof value === 'number')
    return value;

  let match;

  for(let rule in value){

    if(rule === 'viewBox')
      continue;

    let expression = rule[0];

    if(['>','<'].indexOf(expression) === -1)
      throw new Error('Invalid expression');
    
    let size = parseInt(rule.slice(1));

    let toCompare = who === 'width' ? innerWidth : innerHeight;

    if(expression === '<'){

        if(toCompare < size)
          match = value[rule];

    } else {

        if(toCompare > size)
          match = value[rule];

    }

  }

  return (match ||
    ('viewBox' in value ?
      value.viewBox : who === 'width' ? defaultWidth : defaultHeight));
}

export default {
  name: 'ContentLoader',

  functional: true,

  props: {
    width: {
      type: Number | Object,
      default: defaultWidth
    },
    height: {
      type: Number | Object,
      default: defaultHeight
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
  },

  render(h, { props, data, children }) {
    const idClip = props.uniqueKey ? `${props.uniqueKey}-idClip` : uid()
    const idGradient = props.uniqueKey ? `${props.uniqueKey}-idGradient` : uid()

    let { innerWidth, innerHeight } = window;
    const { width, height } = props;

    let widthViewBox = getViewBoxSize(width, defaultWidth);
    let heightViewBox = getViewBoxSize(height, defaultHeight);

    let containerWidth = matchContainerSize(width, 'width');
    let containerHeight = matchContainerSize(height, 'height');

    if(containerWidth > widthViewBox)
      widthViewBox = containerWidth;

    if(containerHeight > heightViewBox)
      heightViewBox = containerHeight;

    return (
      <svg
        width={`${containerWidth}px`}
        height={`${containerHeight}px`}
        {...data}
        viewBox={`0 0 ${widthViewBox} ${heightViewBox}`}
        version="1.1"
        preserveAspectRatio={props.preserveAspectRatio}
      >
        <rect
          style={{ fill: `url(${props.baseUrl}#${idGradient})` }}
          clip-path={`url(${props.baseUrl}#${idClip})`}
          x="0"
          y="0"
          width={widthViewBox}
          height={heightViewBox}
        />

        <defs>
          <clipPath id={idClip}>
            {children || (
              <rect
                x="0"
                y="0"
                rx="5"
                ry="5"
                width={widthViewBox}
                height={heightViewBox}
              />
            )}
          </clipPath>

          <linearGradient id={idGradient}>
            <stop offset="0%" stop-color={props.primaryColor} stop-opacity={props.primaryOpacity}>
              {props.animate ? (
                <animate
                  attributeName="offset"
                  values="-2; 1"
                  dur={`${props.speed}s`}
                  repeatCount="indefinite"
                />
              ) : null}
            </stop>
            <stop offset="50%" stop-color={props.secondaryColor} stop-opacity={props.secondaryOpacity}>
              {props.animate ? (
                <animate
                  attributeName="offset"
                  values="-1.5; 1.5"
                  dur={`${props.speed}s`}
                  repeatCount="indefinite"
                />
              ) : null}
            </stop>
            <stop offset="100%" stop-color={props.primaryColor} stop-opacity={props.primaryOpacity}>
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
}