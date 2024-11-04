let x=2,y=6

// Arithmetic Operators + - * / % ** ++ --
// These operators are used to perform methemetically calculations

console.log(x+y); // 8
console.log(x-y); // -4
console.log(x*y); // 12
console.log(y/x); // 3
console.log(x%y); // 2
console.log(x**y); // 64

// x = x+1; // Approach 1 to post-increment
// x++;     // Approach 2 to post-increment
++x      // Pre-increment
console.log('Value of x:',x) // 3


// y = y-1; // Approach 1 to post-decrement
y--; // Approach 1 to post-decrement
--y; // Pre-decrement
console.log('value of y',y)

// Assignment Operators = 

a = 100
b = 50
// a+=b;
// console.log(a)
console.log(a-=b) // a = a-b
console.log(a*=b) // a = a*b
console.log(a/=b) // a = a/b
console.log(a%=b) // a = a%b

// Relational / Comparison Operators
// Always return a boolean value true/false
// <  >  <=  >= !=

c = 10;
d = 20;
console.log(c>d) // false
console.log(c<d) // true
console.log(c<=d) // true
console.log(c>=d) // false
console.log(c!=d) // true

// Temprory operators
// if condition "c<d" is true so it will return "c" other wise it will return "d"
console.log(c<d?c:d) // return value of c
// this is exectly oposite of the previous condition
console.log(c>d?c:d) // return value of d

// Logical Operators
// we can use these operators between two boolean values
// (Or Operator "||") (And Operator "&&")
let m = true
let n = false
// If both variables are true it will return true, in all other cases it will return false
// condition will be setisfied if both variables are true
console.log(m && n) // false

// This condition will return true, if one of the variable is true
console.log(m || n) // true