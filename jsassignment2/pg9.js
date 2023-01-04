/* write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.

var double = twice(add);

double(11) // retuns 22

var square =  twice(mul);

square(11) // returns 121 */


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
console.log(double(11));

var square = twice(mul);
console.log(square(11));