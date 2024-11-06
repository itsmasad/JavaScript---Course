// JavaScript String Methods Cheat Sheet

// To get the string letters
str = "Asad"
// Approach 1
console.log(str[0])
// Approach 2
console.log(str.charAt(i))


// 1. Convert string to lowercase
let str = "Hello World!";
let lowerStr = str.toLowerCase(); // "hello world!"
console.log(lowerStr);

// 2. Convert string to uppercase
let upperStr = str.toUpperCase(); // "HELLO WORLD!"
console.log(upperStr);

// 3. Capitalize only the first letter
let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // "Hello world!"
console.log(capitalizedStr);

// 4. Capitalize the first letter of each word (Title Case)
let titleCaseStr = str
  .split(" ") // Split string into an array of words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
  .join(" "); // Join words back into a string
// Output: "Hello World!"
console.log(titleCaseStr);

// 5. Toggle the case of each character in the string
let toggleCaseStr = str
  .split("") // Split string into an array of characters
  .map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())) // Toggle case for each character
  .join(""); // Join characters back into a string
// Output: "hELLO wORLD!"
console.log(toggleCaseStr);

// 6. Access a character at a specific index
let charAtIndex = str.charAt(1); // "e"
console.log(charAtIndex);

// 7. Access a character at an index using bracket notation
let charUsingBracket = str[1]; // "e"
console.log(charUsingBracket);

// 8. Get a substring from a string
let substring = str.substring(0, 5); // "Hello"
console.log(substring);

// 9. Extract part of a string (slice)
let slicedStr = str.slice(0, 5); // "Hello"
console.log(slicedStr);

// 10. Find the first occurrence of a substring
let firstIndex = str.indexOf("World"); // 6 (index of "World")
console.log(firstIndex);

// 11. Find the last occurrence of a substring
let lastIndex = str.lastIndexOf("o"); // 7 (index of last "o")
console.log(lastIndex);

// 12. Check if a string includes a substring
let includesStr = str.includes("Hello"); // true
console.log(includesStr);

// 13. Replace part of a string with another string
let replacedStr = str.replace("World", "Everyone"); // "Hello Everyone!"
console.log(replacedStr);

// 14. Remove whitespace from both ends of a string
let spacedStr = "   Hello World!   ";
let trimmedStr = spacedStr.trim(); // "Hello World!"
console.log(trimmedStr);

// 15. Repeat a string a specified number of times
let repeatedStr = "Hi!".repeat(3); // "Hi!Hi!Hi!"
console.log(repeatedStr);

// 16. Split a string into an array of substrings
let splitStr = str.split(" "); // ["Hello", "World!"]
console.log(splitStr);

// 17. Convert an array of strings back to a single string
let joinedStr = splitStr.join(" "); // "Hello World!"
console.log(joinedStr);
