export const isNumberLike = (input) => {
  if (typeof input === 'string') return /^-?\d+(\.\d+)?$/.test(input)
  return typeof input === 'number'
}
