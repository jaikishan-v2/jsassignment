/* Write a function that takes an argument and returns a function that returns that argument.

 

idf = identityf(3);

idf() // return 3 */

function identityf(a){
    return function idf(){
        return a;
    }
}
var idf = identityf(3);

console.log(idf());