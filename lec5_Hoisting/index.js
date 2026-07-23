console.log(a);
var a=10;

fun();
function fun(){
    console.log("Hello world")
}

// hoisting- js default behaviours where all the decleration 
//move to the top of their scope

var a=10;
function fun(){
    console.log(a);
    var a=20;
}
fun();
