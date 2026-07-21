var a;
var b;
console.log(a);
console.log(b);

//undifined - variable is declared but not assigned a value, so it defaults to undefined.
//console.log(c); // ReferenceError: c is not defined - variable is not declared at all, so it throws an error.   

// function test() {
//     var c=10;
// }
// console.log(c); // ReferenceError: c is not defined - variable c is declared inside the function scope, so it is not accessible outside the function.

{
    var c=10;
}
console.log(c); // 10 - variable c is declared inside a block scope, but since var is function-scoped, it is accessible outside the block.

var d=null;
console.log(d); // null - variable d is assigned a value of null, which represents the intentional absence of any object value.

function sum(a,b){
    return a+b;
}
console.log(sum(10)); // NaN - the function sum expects two arguments, but only one is provided, so the second argument is undefined, resulting in NaN when added to 10.

console.log(typeof null); // object - typeof null returns "object", which is a known quirk in JavaScript.