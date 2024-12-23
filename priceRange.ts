type PriceRange = {
  label: string;
  tooltip: string;
  min: number;
  max: number;
}

type Restaurant = {
  name: string;
  averagePerPerson: number;
}


const priceRanges: PriceRange[] = [
  { label: '$', tooltip: 'Inexpensive', min: 0, max: 10 },
  { label: '$$', tooltip: 'Moderate', min: 11, max: 20 },
  { label: '$$$', tooltip: 'Pricey', min: 21, max: 50 }
]

let restaurants: Restaurant[] = [
  { name: 'Casa da Joana', averagePerPerson: 5 },
  { name: 'Burguer King', averagePerPerson: 15 },
  { name: 'McDonalds', averagePerPerson: 10 }
]

//based on the averagePerPerson property, 
// we want to find the price range for each restaurant
// and display the name and price range

restaurants.forEach(restaurant => {
  let priceRange = priceRanges.find(priceRange =>
    restaurant.averagePerPerson >= priceRange.min && restaurant.averagePerPerson <= priceRange.max
  );
  console.log(restaurant.name, priceRange && priceRange.label);
});

//difference between for each, for and map