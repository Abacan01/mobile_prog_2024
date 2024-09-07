// .. spread operator and rest parameters 
// ? what is spread operator?
/* the spread operator is a new addition to the set of operators in Javascripy ES6.
 It takes in an iterable(e.g an array)and expands it into individual elements.
 The spread operator is used to copy an arrat, merge, array, add elements to an array, abd add properties*/
 
 // Example 1
 // Copying an array
 const arr1 = [1, 2, 3];
 const arr2 = [...arr1];

 console.log(arr2); //[1, 2, 3]

 //example 2 
//merging arrays
const ex2_arr1 = [1,2,3];
const ex2_arr2 = [4,5,6]
const ex2_arr3 = [...ex2_arr1, ...ex2_arr2]

console.log(ex2_arr3) //[1,2,3,4,5,6]
//example 3
//adding elements to an array
const ex3_arr1 = [1,2,3];
const ex3_arr2 = [...ex3_arr1, 4,5,6];

console.log(ex3_arr2) //[1,2,3,4,5,6]

/* The spread operator is not only used for arrays, it can also be used for objects.
    Example 4
    Copying an object*/

const obj1 = { name:'John', age: 25};
const obj2 = {...obj1};

/*  Example 5 
    Merging Objects*/
    const obj3 = {name:'John', age: 25};
    const obj4 = {city: 'New York', Country:'USA'};

    const obj5 = {...obj3, ...obj4};
    console.log(obj5); //{name: 'john',age: 25, city:'new york', country:'USA'}

// Example 6
// adding properties to an object
const obj6 = { name:'John', age: 25 };
const obj7 = {...obj6, city:'New York', country: 'USA'}

//Example 7
//overiding properties
const obj8 = {name: 'John', age: 25};
const obj9 = { ...obj8, age:30};

console.log(obj9); //{name:'john', age: 30}

// ! Rest Parameters
/*  rest parameters are used to represent an indefinite number of arguments as an array.
    It allows you to pass an arbitrary number of arguments to a function.*/

//example 8
function sum(...args){
    return args;
}

console.log(sum(1,2,3,4,5)); // [1,2,3,4,5]
