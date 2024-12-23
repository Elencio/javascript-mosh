type Address = {
  street: string;
  city: string;
  zipCode: number;
}

const address = createAddress({ street: '123 Main St', city: 'Springfield', zipCode: 12345 });

// Factory Function
// We use Camel Notation for Factory Functions
function createAddress({ street, city, zipCode }: Address) {
  return {
    street,
    city,
    zipCode
  };
}

