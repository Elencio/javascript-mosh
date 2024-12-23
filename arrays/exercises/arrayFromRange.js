function arrayFromRange(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

const numbers = arrayFromRange(-10, 4);
console.log(numbers); // [1, 2, 3, 4]


function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}

const number = includes(numbers, 2);
console.log(number); // true

function except(array, excluded) {
  let output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}