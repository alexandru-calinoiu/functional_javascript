var forEach = function (list, action) {
  for (var i = 0; i < list.length; i++) {
    action(list[i]);
  }
};

var map = function (mappingFunction, list) {
  var result = [];
  forEach(list, function (item) {
    result.push(mappingFunction(item));
  });
  
  return result;
};

var doubleIt = function (item) {
  if (typeof item == 'number') {
    return item * 2;
  } else {
    return item + item;
  }
};

var reduce = function (combine, base, list) {
  forEach(list, function(item) {
    base = combine(base, item);
  });
  return base;
};

var countNegativeNumbers = function (negativeNumbersTillNow, currentNumber) {
  if (currentNumber < 0) {
    negativeNumbersTillNow++;
  }
  
  return negativeNumbersTillNow;
};

// console.log(map(doubleIt, [2, 6, 'test']));
console.log(reduce(countNegativeNumbers, 0, [0, 9, 8, -4, -1]));
