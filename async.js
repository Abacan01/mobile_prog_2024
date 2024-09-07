/*? async functions are a way to work with asynchronous code in 
asynchronous  ocde in a more synchrounous way. They are built on top
ot promises and are synatic sugar for promises and aare synatic sugar for promise 
*/

console.log("ordering your pizza")

//creating a promise
const pizzaPromise = (() => {
    /* Resolve and reject are callback functions
    what is callback function?
    a callback function is a function that is passed as an argument
    to another function to "called back" at a later time*/

    let order = true;

    if(order){
        setTimeou(()=>{ // set timeout is used to simulate a delay
            resolve("After 5 seconds, Pizza delivered!");
        }, 5000)
    } else{       
        setTimeout(() => {// setTimeout is used to simulate a delay
            reject("after 5 seconds, Pizza not delivered!");
        }, 5000); 
     }
});

//calling tje function with a promise
//use.then() to handle the resolve promise
//use.catch to handle the rejected promise
pizzaPromise()
    .then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error);
    });

    console.log("waiting for you pizza...")

    /*Terminology
    Promise: an object that represents the eventual completion (or failure)
    of an asynchrounous operation and its resulting value.
    Resolve: a callback function that is used when the promise is fullfiled.
    Reject: a  callback function that is used when the promise is rejected.
    .then(): a method that is used to handle the resolved promise.
    .catch(): a method that is used to handle the rejected promise.
