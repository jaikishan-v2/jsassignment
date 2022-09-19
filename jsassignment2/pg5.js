/* write a function that takes a binary function and makes it callable with two invocations

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

function add(a,b){
    return (a+b);
}

function mul(a,b){
    return (a*b);
}


addf = applyf(add);
  
console.log(addf(3)(4));
console.log(applyf(mul)(5)(6));