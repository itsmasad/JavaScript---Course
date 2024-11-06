// When you create a variable at a class level, so all the objects in that class will also reserve some memory for this variable
// so suppose if there are 3 objects in that class, so all of them will reserve the memory for this variable so memory will be waisted
// overcomming this issue we can use "static" keyword, when you use this keyword so it will reserve some memory for this variable at the
// class level, and these variable will be common for all the objects.
// and every time you will create an Object, the variable will not occupy the extra memory,
// and we can direcly call them using class name

class test{
    // in class we don't need to specify let, const or var, we can directly declare the variables
    // class variables
    static a=10; // Static variable
    b=20 // Non-static variable

    static m1(){
        console.log("This is m1 static method...")
    }

    m2(){
        console.log("This is m1 Non-static method...")
    }
}
// 1) we can directly access static variable/methods using class name
console.log(test.a) // 10
console.log(test.b) // undefined