export const equals = (a, b) => {
  return (
    a.length === b.length &&
    a.every((v, i) => v === b[i])
  )
}