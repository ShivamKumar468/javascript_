var a=10; 
var z=20;
let m=60;
function isAllowed(){
    var age=18;
    let m=30;
    if(age>=18){
        let age=20;
        var a=50;
        console.log("allowed");
    }
    function innerFunction(){
        var age =50;
        console.log(z)
        console.log(age);
        console.log(m);
        console.log(a);
    }
    console.log(a);
    innerFunction();

}
isAllowed();
console.log(a,m,z);
console.log(age);
