/* Write  methodize, a function that converts a binary function to a method.

Number.prototype.add = methodize(add);

(3).add(4)  // 7 */

function methodize(fn){
    return function (a) {
        return fn(this, a); 
      };
}

function add(a ,b) {
    return a + b;
}

Number.prototype.add = methodize(add);

console.log((3).add(4));