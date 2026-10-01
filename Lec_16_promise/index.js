// promice is the solution to this problem. It allows you to write asynchronous code in a more synchronous manner, making it easier to read and maintain. Promises provide a cleaner way to handle asynchronous operations by chaining `.then()` methods and using `.catch()` for error handling, which helps avoid deep nesting and improves code clarity.

// it is a alternate option to handel asynchronous operations. in a more manageable way. Promises represent a value that may be available now, or in the future, or never. They allow you to attach callbacks for success and failure cases, making it easier to handle asynchronous flows without falling into callback hell.

// promise is an object which represnt eventual completion asynchronous task


// callback is a function which is passed as an argument to another function and is executed after some operation is completed. It is a way to ensure that certain code runs only after a specific task has finished, especially in asynchronous programming.

let age=21;
let p= new Promise((resolve,reject)=>{
    if(age>18) resolve("promise is resolved");
    else{
        reject("promise is rejected");
    }
    });
   
   p
   .then((data)=>{
    console.log(data);
   })
   .catch((err)=>{
    console.log(err);
   })

   //create a function which returns a promise to add two numbers 
   function sum(a,b){
    let p=new Promise((resolve,reject)=>{
        if(typeof a!="number" || typeof b!=="number"){
            reject("Invalid input");

        }
        else{resolve(a+b);}
   });
   return p;
}

sum(2,"3")
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

//create a function allow to vote which returns a promise to aloow a person with age >=18, else not allowed 
function allowVote(age){
    let p=new Promise((resolve,reject)=>{
        if(age>=18){
            resolve("You are allowed to vote");
        }
        else{
            reject("You are not allowed to vote");
        }
    });
    return p;
}

allowVote(21)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});