//Objects Literals

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function () {
    console.log('draw');
  }
  //method
}

circle.draw(); //method

//Factory Function 

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    }
  }
}

const circle1 = createCircle(1);

//Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const anotherCircle = new Circle(1);

//Primitives area copied by their value
//Objects are copied by their reference