var A = [3, 4, 5, 6, 7, 8];
var l = A.length;
var B = [];
for (i = 0; i <= l; i++) {
  if (i + 1 && i + 2 < l) {
    B[i] = A[i + 1] * A[i + 2];
  }
}
B.push(A[l-1]*A[0])
B.push(A[0]*A[1])
console.log(B);