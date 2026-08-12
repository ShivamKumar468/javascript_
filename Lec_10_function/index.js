// function foo(){

// }
// console.log(fun);
// fun();

// var fun = function(){
//     console.log("Hello");
// }
// fun();
// function fun(){
// console.log(a+b);
// }

// function foo(a){
//     console.log(a);
//     //fis a function foo(a){
//     a(2,3);
// }
// foo(fun());

function foo(cb){
    return cb;
}
function fun(){
    console.log("Hello");
}
let result = foo(fun);
console.log(result);
result();
//console.log(result());

//closer- function bind with its lexical scope, it can access the variables defined in the outer function 
// even after the outer function has finished executing. In the provided code snippets, the `outer` function creates a closure by returning the `inner` function, 
// which has access to the variable `a` defined in `outer`. When `f1` and `f2` are called, they each maintain their own separate instance of `a`, demonstrating how closures can encapsulate state.