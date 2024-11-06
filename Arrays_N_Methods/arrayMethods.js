
let fruits = ["Banana","Mango","Orange","Graps"];

// toString() & join()
// toString() will convert the array into a string value by seperating the values using ","
// join(): will by default convert the array into string by seperatint the values using "," but you can also define any other seperator

let str1 = fruits.toString();
console.log(str1) // Banana,Mango,Orange,Graps

let str2 = fruits.join("*");
console.log(str2)

//pop(): will remove the last variable/value of the array at the end
fruits.pop()
console.log(fruits)

//Push(): will add the new variable/value to the array at the end

console.log(fruits.push('Apple'))//
console.log(fruits)

// shift(): will remove the first array element, and shift all other elements to the lower index
console.log(fruits.shift())
console.log(fruits)

// unshift(): adds new element to the array at the begining and return the length of the array

console.log(fruits.unshift('Kiwi'))
console.log(fruits)

// deleting the element from the array using index number
delete fruits[0]
console.log(fruits)

// concat - joining/merging 2 or more arrays
let arr1 = [1,2,3,4]
let arr2 = ["A","B","C"]
console.log(arr1.concat(arr2))

// concat more than 1 array
let arr3 = ["X","Y","Z"]
console.log(arr1.concat(arr2,arr3))

// slice: you can define the start point and end point to cut the array
let arrayalph = ["A","B","C","D","E","F","G"]
console.log(arrayalph.slice(3));
console.log(arrayalph.slice(2,5));

//sort(): will sort the array in alphabetical order
console.log(fruits.sort());
let num = [400,300,100,500,900,200]
console.log(num.sort())

//reverse(): it will reverse the array
let notReversed = ["A","B","C","D"]
console.log(notReversed.reverse())