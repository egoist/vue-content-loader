export const removePixelUnit = (input) => {
  if (typeof input === 'string') return input.replace(/(.+)px$/, '$1')
  return input
}

export const isNumberLike = (input) => {
  if (typeof input === 'string') return /^-?\d+(\.\d+)?$/.test(input)
  return typeof input === 'number'
}
