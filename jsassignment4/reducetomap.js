var A = [3, 4, 5, 6, 7, 8];
var l = A.length;
var B = [];
var C = [];

var B = A.map(function (num) {
  return num * 2;
});

console.log(B);

var C = A.reduce(function map(previousValue, currentValue) {
  if (currentValue) {
    var value = currentValue * 2;
    return [...previousValue, value];
  }
  return previousValue;
}, []);

console.log(C);
