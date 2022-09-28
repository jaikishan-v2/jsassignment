var A = [3, 4, 5, 6, 7, 8];
var l = A.length;
var B = [];

var B = A.reduce(function (sum = 0, ele) {
  return (sum = sum + ele);
});

console.log(B);

function reduceMethod(array, fn) {
  var C = 0;
  for (i = 0; i < l; i++) {
    var ele = array[i];
    C = C + fn(0, ele);
  }
  return C;
}

var D = reduceMethod(A, function fn(sum = 0, ele) {
  return (sum = sum + ele);
});

console.log(D);
