//? destructuring objects and arrays
//sept2024
const person = {
    name: 'john',
    age: 25,
    hoddies ['reading', 'cooking'],
    greet: function(){
        console.log("Hello, my name is " + this.name + 'and i am ' + this.age + "Years Old");
    }
}

//when to use destructuring 
//Dersctructurinfg is usefull why you  only  need a property of an object
//regular function
//regular passing of objects
//even through we are passing the whole object, we are only using the  name property

const printName = (PersonalData) => {
    console.log(PersonalData.Name);
}