const address = {
  street: '123 Main St',
  city: 'Springfield',
  zipCode: '12345',
}

function showAddress(address) {
  for (let key in address)
    console.log('Key:', key, 'Address:', address[key]);
}

showAddress(address);



