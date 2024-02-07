export const numberParserLf = (number = 1000 /* outputs '1.000' */) => {
  return number
    .toString()
    .split('')
    .reverse()
    .map((n, x) => (x > 1 && x % 3 === 0 ? `${n}.` : n))
    .reverse()
    .join('')
}

export const numberToMinSec = (ms = 1000 /* outputs '00:01' */) => {
  if (ms < 1e3) return '00:00'

  let min = 0
  for (; ms > 6e4; ms -= 6e4) ++min

  const format = (number = 1) => (number < 10 ? '0' + number : number)

  return (
    format(min) +
    ':' +
    format(Number(ms.toString().split('').reverse().slice(3, 5).reverse().join('')))
  )
}
