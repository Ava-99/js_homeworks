// 1. Using lexical scope, write a function that display the following outputs in order:
/**
 * Action 
 * Potential
 * Signals
 */
// !Answer:

// function displayOutPuts() {
//     const outputs = [
//         () => console.log("Action"),
//         () => console.log("Potential"),
//         () => console.log("Signals")
//     ];

//     for (let i = 0; i < outputs.length; i++) {
//         outputs[i]();
//     };
//     //or
//     //outputs.map(output => output());

// };
// displayOutPuts();

function displayOutPuts() {
    const outputs =["Action", "Potential", "Signals"];

    function displayOutPut(index) {
        if (index >= outputs.length) {
            return;
        };
        console.log(outputs[index]);
        displayOutPut(index + 1);
    };
    displayOutPut(0);
};

displayOutPuts();

//----------------------------------------------------------------------------------------------

// 2. Using higher-ordrer functions:
// todo1: write two functiones(innerFunc, outerFunc).
// todo2: the innerFunc calculate the multiplication of two numbers.
// todo3: call the innerFunc in the outerFunc.

// !Answer:

function innerFunc(a, b) {
    return a * b;
};
function outerFunc(innerFunc,...args) {
    console.log(innerFunc(...args))
};

outerFunc(innerFunc, 3, 3);

//-------------------------------------------------------------------------------

// 3. Follow these steps:
// todo1: write a function that receives an array of numbers.
// todo2: in the function that you created in todo1, you should create two functions.
// todo3: the first function displays the first half of the array, and the second function displays the second half of the array.

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* => output
     [ 1, 2, 3, 4, 5 ]
     [ 6, 7, 8, 9, 10 ]
     */

// !Answer:
const halvedArray = (array) => {

    const firstHalf = array.slice(0, Math.ceil(array.length / 2));
    const displayFirstHalf = () => {
        console.log(firstHalf);
    };
    const displaySecondHalf = () => {
        console.log(array.slice(Math.ceil(array.length / 2)));
    };
    displayFirstHalf();
    displaySecondHalf();
};

halvedArray(numbers);

//------------------------------------------------------------------------------------------------------------------

// 4. Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo: using const, let instead of var.
// todo: arrow function
// todo: template string instead of "" and ''
// todo: destructuring

//todo 1: In the new ECMAScript standard, the const and let keywords were introduced as alternatives to the var keywords for declaring variables. const is used to declare a constant variable whose value cannot be reassigned, while let is used to declare mutable variables with block scope.

//const pi = 3.1415; // Declaring a constant varriable
//pi = 3.14; // Invalvid: Trying to reassign a constant varriable

//let radius = 3; // Declaring a mutable varriable
//radius = 3.3; // Valid: Chainging the value of "radius"

//todo 2: Arrow functions are a concise syntax introduced in ECMAScript for defining functions. They provide a more compact and simplifid way of writing function expressions.

//function sum(a, b) {
//    return a + b;
//}; // Regular function expression

//const sum = (a, b) => a + b; // Arrow function expression

//todo 3: Template strings, also known as template literals, are an enhanced way of working with strings in ECMAScript. They allow for embedding expressions and multiline strings without the need for concatenation or escaping characters. This allowes us to create dynamic strings easily without the need for concatenation or string interpolation.

// const myName = "Ava";
// console.log(`My name is ${myName}.`); //Using template strings

//todo 4: Destructuring is a feature that allows us to extract values from arrays or objects into distinct variables using a concise syntax.

// destructuring an array:
// const array = [1, 2, 3];
// const [first, ...rest] = array;

// destructuring an object:
// const object = {
//     first1: 1,
//     second: "2nd",
//     third: ["third"],
// };
// const {first1, second, third} = object;



//----------------------------------------------------------------------------------------------------------------

// 5. You have an object with a string property. Implement a method named counterString for the object that performs the following tasks:
// todo1: convert the received string into an array based on spaces.
// todo2: calculate the length of each element in the array.
// todo3: return a new array containing the lengths of the elements.

//  const obj = {
//     string: "Hello world how are you?",
//     write code here
// }

// note: obj.counterString("Hello world how are you?")==>[ 5, 5, 3, 3, 4 ]

// !Answer:

 const obj = {
    string: "Hello world how are you?",
    counterString: function(){
        const stringInTOArray = this.string.split(" ");
        const lengthOfArray = stringInTOArray.map(item => item.length);
        return lengthOfArray;
    }
};
console.log(obj.counterString("Hello world how are you?"));

//---------------------------------------------------------------------------------------------------------------