const getWindowSize = () => ({
  width: window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth,
  height: window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
});

export const defaultWidth = 400;
export const defaultHeight = 130;

export const uid = () =>
  Math.random()
    .toString(36)
    .substring(2)

export const getViewBoxSize = (param, _default) =>
  typeof param === 'number' ? param :
    'viewBox' in param ?
      param.viewBox : _default;

export const matchContainerSize = (value, target) => {

  if (typeof value === 'number')
    return value;

  const { width: windowWidth, height: windowHeight } = getWindowSize();

  let match;

  for (let rule in value) {

    if (rule === 'viewBox')
      continue;

    let expression = rule[0];

    if (['>', '<'].indexOf(expression) === -1)
      throw new Error('Invalid expression');

    let size = parseInt(rule.slice(1));

    let toCompare = target === 'width' ? windowWidth : windowHeight;

    if (expression === '<') {

      if (toCompare < size)
        match = value[rule];

    } else {

      if (toCompare > size)
        match = value[rule];

    }

  }

  return (match ||
    ('viewBox' in value ?
      value.viewBox : target === 'width' ? defaultWidth : defaultHeight));
}
