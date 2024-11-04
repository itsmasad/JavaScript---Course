// Car Example
// Suppose car is an object
// model,weight,color and name are its properties
// car.start(),car.drive(),car.stop(),car.brake() are its methods


// Person is the name of the object
let person=
{
// These are the object properties
firstName:"John",
lastName:"Albert",
age:50,

}

// Accessing Object Properties
// Approach 1
console.log(person["firstName"]) // John 
// Approach 2
console.log(person.age) // 50

// Add new property to the existing object
// Approach 1
person["height"]=5.8;
// Approach 2
person.weight=80;

console.log(person.height); // 5.8

// Update the existing property
person.age=60;
console.log(person.age) // 60

// Remove the property from the object
delete person.lastName;
console.log(person.lastName) // Unverified