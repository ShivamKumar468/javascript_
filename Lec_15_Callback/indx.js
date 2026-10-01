function starter(cb){
    setTimeout(function(){
        console.log("Starter served")
        cb();
    }, 1000);

}
function maincourse(cb){
    setTimeout(function(){
        console.log("Main Course")
        cb();
    }, 2000);
}
function drinks(cb){
    setTimeout(function(){
        console.log("Drinks served")
        cb();
    }, 500)
}
function Sweets(cb){
    setTimeout(function(){
        console.log("bill payed");
        cb();
    }, 100)
}

//group 
//starter. --> drink --> maincourse  --> Sweets

// starter();
// drinks();
// maincourse();
// Sweets();

starter(function() {
    drinks(function() {
        maincourse(function() {
            Sweets(function() {
                bill(function() {
                    console.log("Hii");
                });
            });
        });
    });
});
console.log("Hii");

// drinks --> starter --> maincourse --> Sweets-->bills


//function should always responsible for its own task and should not be responsible for the next task.

// What is disadvantage of this approach?The disadvantage of this approach is that it leads to "callback hell" or "pyramid of doom," where callbacks are nested within each other, making the code difficult to read and maintain. Each function is responsible for calling the next function, which creates a tightly coupled structure. This can lead to issues such as:

//1. **Readability**: The code becomes hard to follow due to deep nesting, making it challenging to understand the flow of execution.
//2. **Maintainability**: If you need to change the order of execution or add new steps, it can be cumbersome and error-prone.
//3. **Error Handling**: Managing errors becomes more complex as each callback needs its own error handling logic, leading to duplicated code.
//4. **Scalability**: As the number of asynchronous operations increases, the complexity grows exponentially, making it difficult to scale the application.

// call back hell - nesting of callbacks which is hard to read and manage. It is also known as pyramid of doom.

// promice is the solution to this problem. It allows you to write asynchronous code in a more synchronous manner, making it easier to read and maintain. Promises provide a cleaner way to handle asynchronous operations by chaining `.then()` methods and using `.catch()` for error handling, which helps avoid deep nesting and improves code clarity.

// it is a alternate option to handel asynchronous operations. in a more manageable way. Promises represent a value that may be available now, or in the future, or never. They allow you to attach callbacks for success and failure cases, making it easier to handle asynchronous flows without falling into callback hell.

// promise is an object which represnt eventual completion asynchronous task
