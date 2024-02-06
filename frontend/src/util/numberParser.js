export const numberParserLf = (number = 1000 /* outputs '1.000' */) => {
  return number
    .toString()
    .split('')
    .reverse()
    .map((n, x) => (x > 1 && x % 3 === 0 ? `${n}.` : n))
    .reverse()
    .join('')
}
