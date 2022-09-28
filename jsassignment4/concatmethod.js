var A = [3, 4, 5, 6, 7];
var l1 = A.length;
var B = [8, 9, 10, 11, 12, 13];
var l2 = B.length;
var C = A.concat(B);

console.log(C);

function concatMethod(A, B) {
  var D = A;
  for (i = l1; i < l1 + l2; i++) {
    D[i] = B[i - l1];
  }
  return D;
}

var E = concatMethod(A, B);

console.log(E);
