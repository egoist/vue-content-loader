const removePixelUnit = (input) => {
  if (typeof input === 'string') return input.replace(/(.+)px$/, '$1')
  return input
}

const isNumberLike = (input) => {
  if (typeof input === 'string') return /^-?\d+(\.\d+)?$/.test(input)
  return typeof input === 'number'
}

export const generateViewBox = (width, height) => {
  width = removePixelUnit(width)
  width = isNumberLike(width) ? width : 400
  height = removePixelUnit(height)
  height = isNumberLike(height) ? height : 130
  return `0 0 ${width} ${height}`
}
