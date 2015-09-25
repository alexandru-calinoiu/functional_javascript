var CIRCLE = "circle";
var SQUARE = "square";
var RECTANGLE = "rectangle";

var getAreaFunction = function (shape) {
  return function () {
    switch (shape) {
      case CIRCLE:
        return Math.PI * arguments[0] * arguments[0];
      case SQUARE:
        return arguments[0] * arguments[0];
      case RECTANGLE:
        return arguments[0] * arguments[1];
    } 
  };
};

var Shape = function (type) {
  var area = getAreaFunction(type);
  return {
    getArea: function () {
      return Math.round(Number(area.apply(this, arguments)));
    }
  };
};
                      
// var getAreaOfCircle = getAreaFunction(CIRCLE);
// var getAreaOfSquare = getAreaFunction(SQUARE);
// var getAreaOfRectangle = getAreaFunction(RECTANGLE);

// console.log(getAreaOfCircle(10));
// console.log(getAreaOfRectangle(2, 4));

var circle = Shape(CIRCLE);

console.log(circle.getArea(10));
