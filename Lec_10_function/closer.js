function outer(){
    let a=10;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}

let f1=outer(); //clousure sirf function ke through hi access ho skta (a:10)
let f2=outer();
//console.log(f1);
f1()//inner
f2();
