// JavaScript array itself is a predefined object

// Approach 1
let car1 = ["Honda","Suzuki","Toyota"];

// Approach 2
let car2 = new Array("Honda","Suzuki","Toyota");

// Calling value from the array
console.log(car2[0])

// Changing the value
car2[0] = "BMW"
console.log(car2[0])

// Different variables in the array
let myArray = ["Name",123,10.15,true]
console.log(myArray)

// We can have objects in array
let person1 = {
    name:"John",
    age:30
};
let person2 = {
    name:"David",
    age:40
};
// Saving both objects in to an array
let mynewArray = [person1,person2]

// Calling array
console.log(mynewArray)
// Calling first object of array
console.log(mynewArray[0])
// Calling property of object from the array
console.log(mynewArray[1].age)


let fruits = ["Banana","Apple","Orange","Graps"]
// Getting the lengh of the array
console.log(fruits.length)

for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i])
}

// Looping elements from array using for of loop
for(ele of fruits){
    console.log(ele)
}

// Recongnizing the array variable
console.log(typeof(fruits)) // Object

// Using javascript predefined object "Array" we are recognizing the Array
// if the variable is array, it will return true, otherwise it will return false
console.log(Array.isArray(fruits))