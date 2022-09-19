/* write a function composeu that takes two unary functions  and returns a unary function that can ball them both

compose(double, square) (3) // 36 */

function compose(fn1, fn2) {
    return function(x) {
      return fn2(fn1(x));
    }
}

function twice(fn) {
    return function (a) {
        return fn(a, a)
    }
}

function add(a ,a) {
    return a + a;
}

function mul( a, a) {
    return a * a;
}

var double = twice(add);

var square = twice(mul);

console.log(compose(double, square)(3));
