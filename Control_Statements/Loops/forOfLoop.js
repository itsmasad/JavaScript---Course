// For of loop is used for arrays


let fruits = ["Banana","Apple","Orange","Graps"]

// Looping elements from array
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