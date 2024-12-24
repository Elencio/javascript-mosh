const numbers = [1, 2, 3, 4, -6, -4]

const items = numbers
  .filter(number => number >= 0)
  .map(n => ({ value: n }))

console.log(items)