const movies = [
  { title: 'Avatar', year: 2018, rating: 4.5 },
  { title: 'The Dark Knight', year: 2019, rating: 4.7 },
  { title: 'The Avengers', year: 2019, rating: 4.0 },
  { title: 'The Avengers', year: 2018, rating: 4.3 },
]

//all movies in 2019 with rating > 4  
//sort them by their rating
//descending order
//pick their title

const filteredMovies = movies
  .filter(movie => movie.year === 2019 && movie.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(movie => movie.title);

console.log(filteredMovies); // [ 'The Dark Knight' ]