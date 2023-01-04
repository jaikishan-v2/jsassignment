var A = [3, 4, [5, 6], [[[7, 8]]],9,[10,11],[12]];
var l = A.length;
var B = [];

var B = A.flat(3);

console.log(B);

function flatMethod(array, depth) {
  if (depth < 0) {
    return array;
  }
  var C = [];
  for (k = 0; k < depth; k++) {
    for (i = 0; i <= l+1; i++) {
      if (Array.isArray(array[i])) {
        var temp = array[i];
        for (j = 0; j < temp.length; j++) {
          C.push(temp[j]);
        }
      } else C.push(array[i]);
    }
    return flatMethod(C, depth - 1);
  }
  return array;
}

var D = flatMethod(A, 3);

console.log(D);
