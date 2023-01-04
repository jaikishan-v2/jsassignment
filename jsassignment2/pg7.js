/* without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function

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