/* write a function that adds from two invocations

addf(3)(4)  // 7 */

function addf(a){
    return function f(b){
        return a+b;
    }
}


console.log(addf(3)(4));