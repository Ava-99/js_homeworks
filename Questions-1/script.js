// QUestion-1: using an example, explain the difference between block, global and fuction scop in variables.
// example:

//block scopes: if, for, while, switch, else
//    if(true) {
//       let blockVariable = " I am inside a block";
//        console.log(blockVariable); // output: I am inside a block
//   }
//   console.log(blockVariable); // blockVariable is not defined
 

// global scope
//let globalVariable = "I am a global variable";

//function exampleGlobalScope() {
  //  console.log(globalVariable); // output: I am a global variable
//}
//exampleBlockScope();
//console.log(globalVariable); // output: I am a global variable

//function scope
// function exampleFunctionScope() {
//    let functionVariable = "I am a function variable";
//    console.log(functionVariable); // output: I am a function variable
// }

//console.log(functionVariable); //output: functionVariable is not defined


//--------------------------------------------------------------------------------------------------------------

// Question-2: completed this table(Y or N)

// | keyword | global scope | block scope | Function Scope | can be re-assign | can be re-declare |
// |---------|--------------|-------------|----------------|------------------|-------------------|
// | var     |      Y       |     Y       |       N        |        Y         |         Y         |
// | let     |      N       |     N       |       N        |        Y         |         N         |
// | const   |      N       |     N       |       N        |        N         |         N         |

//--------------------------------------------------------------------------------------------

//Question-3:
// Define any car using an object with 4 properties, like: car name, model, color and etc.
// Then access the car's name value in the console with the way you've learned.
// Answer:
const car ={
    carName: "veloster",
    carModel: 2016,
    carColor: ["black", "red"],
    carBrand: "hyundai",
    hybrid: false,
};
console.log(car.carName);


//-------------------------------------------------------------------------------------------------

//Question-4:
// Acording to your js11 session, write a code that showes why shouldn't use var?
// Answer:

//    if(true) {
//        var blockVariable = " I am inside a block";
//        console.log(blockVariable); // output: I am inside a block
//   }

//   console.log(blockVariable); // blockVariable is'nt not defined :/

//--------------------------------------------------------------------------------------------

//Question-5:
// What is the result of  the code below?
const hello = "what's up aps?";
const obj = {
    func() {
        return hello;
    },
};
console.log(obj.func()); // answer is?: what's up aps?


//----------------------------------------------------------------

//Question-6:
// write a one line arrow function which returns the square of the given argument.
// Answer:
const square = (num) => num ** 2;
console.log(square(5)); // >>> 25

//------------------------------------------------------------------------------------------

//Question-7:
// Complete the code below to display "{ method: [Function: method] }" in the console when the method function is executed.

const myObject = {
    method() {
        console.log( this )
    },
};
myObject.method();

//------------------------------------------------------------------------------------------------------------------

//Question-8: This function is to get a string and reverse it; convert this function to an arrow function.
//(If you don't know what the reverse, join, or split methods are, go to the MDN website and look them up.)
const reverseString = function (str) {
    return str.split("").reverse().join("");
};
// Answer:

const reverseString2 = (str) => str.split("").reverse().join("");

console.log(reverseString('google'));
console.log(reverseString2('google'));

//---------------------------------------------------------------------------------------------------------------

// Question-9: Follow the steps below:
// todo-1: write an object and add two properties: name and age.
// todo-2: write a method for this object; this method must print 'string' in the console. Like => `Hello, my name is {name for example Jasem}, and I am {age for example 120} years old.
// hint: To access properties in the method you must use "this" keyword.
// Answer:
const person = {
    'name': "Ava",
     age: 24,
     presentation() {
        console.log(`Hello, my name is ${this['name']}, and I am ${this.age} years old.`)
     }
}

person.presentation();

