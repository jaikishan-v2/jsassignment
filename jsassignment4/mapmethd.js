var A = [3, 4, 5, 6, 7, 8];
var l = A.length;
var B = [];

var B = A.map(function (num) {
  return num * 2;
});

console.log(B);

function mapMethod(array, fn) {
  var C = [];
  for (i = 0; i < l; i++) {
    var ele = array[i];
    C[i] = fn(ele);
  }
  return C;
}

var D = mapMethod(A, function fn(num) {
  return num * 2;
});

console.log(D);
