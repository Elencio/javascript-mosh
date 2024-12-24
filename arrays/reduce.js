const numbers = [1, 2, 3, 4]

//The reduce method is used to reduce the array to a single value
//The reduce method receives a callback function as a parameter
//The callback function receives two parameters, the accumulator and the currentValue
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})

console.log(sum)