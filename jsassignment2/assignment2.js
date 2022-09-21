/* 1. Write a function that takes an argument and returns that argument.

identity(3)  // returns 3 */

function identity(a){
    return a;
}

console.log(identity(3));
console.log('\t');

/* 2. Write two binary functions, add and mul, that take two numbers and return their sum and product

add(3, 4)  // return 7

mul(3, 4)  // return 12 */

function add(a,b){
    return (a+b);
}

function mul(a,b){
    return (a*b);
}

console.log(add(3,4));
console.log(mul(3,4));
console.log('\t');

/* 3. Write a function that takes an argument and returns a function that returns that argument.

idf = identityf(3);

idf() // return 3 */

function identityf(a){
    return function idf(){
        return a;
    }
}
var idf = identityf(3);

console.log(idf());
console.log('\t');

/* 4. write a function that adds from two invocations

addf(3)(4)  // 7 */

function addf(a){
    return function f(b){
        return a+b;
    }
}

console.log(addf(3)(4));
console.log('\t');

/* 5. write a function that takes a binary function and makes it callable with two invocations

addf =  applyf(add);

addf(3)(4) // 7
applyf(mul)(5)(6) // 30 */

function applyf(fn) {
    return function(a) {
      return function(b) {
        return fn(a,b);
      };
    };
};

addf = applyf(add);
  
console.log(addf(3)(4));
console.log(applyf(mul)(5)(6));
console.log('\t');

/* 6. write a function that takes a function and an argument, and returns a function that cans supply a second argument

add3 = curry(add, 3)

add3(4) // return 7

curry(mul, 3)(4) // 12 */

function curry(fn, a){
    return function(b) { 
        return  fn(a,b);
    };
}

add3 = curry(add, 3);

console.log(add3(4));
console.log(curry(mul, 3)(4));
console.log('\t');

/* 7. without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function

inc(5) //6

inc(inc(5)) //7 */

function inc(a){
    return a+1;
}

console.log(inc(5));
console.log(inc(inc(5)));

function inc1(a){
    return function idf(){
        return a+1;
    }
}
var idf = inc1(5);

console.log(idf());
console.log(idf(idf())+1);
console.log('\t');

/* 8. Write  methodize, a function that converts a binary function to a method.

Number.prototype.add = methodize(add);

(3).add(4)  // 7 */

function methodize(fn){
    return function (a) {
        return fn(this, a); 
      };
}

Number.prototype.add = methodize(add);

console.log((3).add(4));
console.log('\t');

/* 9. write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.

var double = twice(add);

double(11) // retuns 22

var square =  twice(mul);

square(11) // returns 121 */


function twice(fn) {
    return function (a) {
        return fn(a, a)
    }
}

function add1(a ,a) {
    return a + a;
}

function mul1( a, a) {
    return a * a;
}

var double = twice(add1);
console.log(double(11));

var square = twice(mul1);
console.log(square(11));
console.log('\t');

/* 10. write a function composeu that takes two unary functions  and returns a unary function that can ball them both

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

var double = twice(add);

var square = twice(mul);

console.log(compose(double, square)(3));
console.log('\t');

/* Write a code to sort this array */ 
var a = [4,8,15,16,23,12];
sorted = a.sort(function (a,b) {return a-b });
console.log(sorted);