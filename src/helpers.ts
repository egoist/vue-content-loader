const removePixelUnit = (input) => {
  if (typeof input === 'string') return input.replace(/(.+)px$/i, '$1')
  return input
}

const isNumberLike = (input) => {
  if (typeof input === 'string') return /^-?\d+(\.\d+)?$/.test(input)
  return typeof input === 'number'
}

const formatValue = (value, defaultValue) => {
  value = removePixelUnit(value)
  return isNumberLike(value) ? value : defaultValue
}

export const generateViewBox = (width, height) => {
  return `0 0 ${formatValue(width, 400)} ${formatValue(height, 130)}`
}
