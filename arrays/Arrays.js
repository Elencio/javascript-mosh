//Add number to the end of the array

const numbers = [1, 2, 3];
//the push method adds the number to the end of the array
numbers.push(4, 5);

//add number to the beginning of the array
numbers.unshift(0);

//add number to the middle of the array
numbers.splice(2, 0, 'a', 'b');
// splice method takes 3 arguments, the first is the index where you want to start,
// the second is the number of elements to remove, and the third is the elements
// you want to add.


//Finding elements (primitives)
const numbers01 = [1, 2, 3, 1, 4];

console.log(numbers01.indexOf(1)); // the search starts from the beginning
console.log(numbers01.lastIndexOf(1)); // the search starts from the end
console.log(numbers01.indexOf(1, 2)); // the search starts from the second index

console.log(numbers01.includes(1)); // returns true if the element is in the array

//Finding elements (reference types)

const courses = [
  { id: 1, name: "Computer Science" },
  { id: 2, name: "Mathematics" },
  { id: 3, name: "Physics" },
]

const course = courses.find(function (course) {
  return course.name === "Computer Science";
})

const course1 = courses.find((course) => course.name === "Computer Science")


//if the course is not found, it returns undefined

console.log(course);

//Remove number to the end of the array

//the pop method removes the number to the end of the array
const last = numbers.pop();

//remove number to the beginning of the array
const first = numbers.shift();

//romve number to the middle of the array
numbers.splice(2, 1, 4);
// splice method takes 3 arguments, the first is the index where you want to start,
// the second is the number of elements to remove, and the third is the elements
// you want to add.