//there is no retun type
function Function_Name(){
    console.log("Some Work");
    return 5;

}
let result = Function_Name();
console.log(result);


//function add(a,b){
function add(a=5,b=3){


    console.log(a,b);

    return a+b;
}

//let out=add()
//let out=add(5,"2");
//let out =add();
let out =add(10);
console.log(out);

