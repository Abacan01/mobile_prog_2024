// JS basic syntax
// 1. Declaring and assigning values

let name = "Max"; // let / variables are used for values that can change
let age = 29;
let hasHobbies = true;

var full_name = "Ian";
const nameThatCannotChange = "Max"; // const / constants are used for values that should not change
// meaning const nameThatCannotChange = "Max"; cannot be changed in the entire code

// Conditional statements
if (hasHobbies) { // if hasHobbies is true
    console.log("I have hobbies");
}

if (age > 25) {
    console.log("You are older than 25.");
} else if (age < 25) {
    console.log("You are younger than 25.");
} else {
    console.log("You are 25 years old.");
}

switch (name) {
    case "Max":
        console.log("You are Max");
        break; // break is used to exit the switch statement
    default: // default is used when none of the cases are met
        console.log("You are not Max"); 
}

// Running to the console
console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(nameThatCannotChange);

console.log(`My name is ${name} and I am ${age} years old.`); // output: My name is Max and I am 29 years old. '${name}' is an example of string interpolation

let hobbies = ["Sports", "Cooking"];

// Printing the array
console.log(hobbies); // output: ["Sports", "Cooking"]
// Accessing an element in the array
console.log(hobbies[0]); // output: Sports

for (let hobby of hobbies) {
    console.log(hobby);
}

// Adding an element to the array
hobbies.push("programming");

console.log(hobbies); // output: ["Sports", "Cooking", "programming"]

// Mapping an array
// mapping is used to loop through an array and modify the elements
hobbies = hobbies.map((hobby) => {
    return hobby + " is fun";
});

console.log(hobbies); // outputs: ["Sports is fun", "Cooking is fun", "programming is fun"]

// Object declaration
let person = {
    name: "Max", // this is a property/field
    age: 29, // this is a property/field
    hasHobbies: true, // this is a property/field
    greet() { // this is a method/function of the object
        console.log("Hello, I am " + this.name); // 'this' refers to the object itself
    }
};

// Accessing object properties
console.log(person.name); // output: Max
console.log(person.age); // output: 29
console.log(person.hasHobbies); // output: true

// Function declaration
function myFunction() {
    console.log("Hello");
}

// Calling the function
myFunction();

const myFunctionArrow = () => {
    return "Hello"; // return is used to return a value from a function; you can return a string, number, boolean, array, object, etc.
    // return stops the function from executing further
};

// in functions, you can add variables, if statements, loops, arrays, objects, etc.
// Calling the function
console.log(myFunctionArrow()); // output: Hello

// Adding parameters/arguments to functions
function describeStudent(name, age) { // this is a function that takes in two parameters/arguments
    console.log("This person is " + name + " and is " + age + " years old");
}

describeStudent(name, age); // output: This person is Max and is 29 years old

// Another way to write a function using arrow function
const describeStudentArrow = (name, age) => {
    return `This person is ${name} and is ${age} years old`;
};

console.log(describeStudentArrow(name, age)); // output: This person is Max and is 29 years old