const courses = [
  { id: 1, name: 'React.js' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'Node.js' },
]

//The name react and React are the same, 
// but the uppercase and lowercase letters are different.

const sortedCourses = courses.sort((a, b) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()

  //It´s important that both letters are uppercase or 
  //  lowercase, to remove the case sensitive

  if (nameA < nameB) return -1
  if (nameA > nameB) return 1

  return 0
})

console.log(courses)