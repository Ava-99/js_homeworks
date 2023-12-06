// Question1
/*
? look at the code below:
? make a sentence by concatenating the object keys
*/
const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
};

// output => 'ali writes novels'

// Answer:

const keys = Object.keys(object1);
console.log(keys.join(' '));


//---------------------------------------------------------

// Question2
/*
todo: 1. Take the object from question1
todo: 2. put all the values into an array with 2 ways that ypu've learned.
*/

// Answer:

const firstWay = Object.values(object1);
console.log(firstWay);

const secondWay = [];
for(const key in object1) {
    secondWay.push(object1[key]);
};
console.log(secondWay);

const thirdWay = Object.keys(object1).map(key => object1[key]);
console.log(thirdWay);

//-------------------------------------------------------------------------------

// Question3
/*
? look at the code below:
todo: 1. modify the function to get the square of arguments
todo: 2. you're allowed to give just ONE PARAMETER when calling the function 
todo: 3. you MUST use both given arguments (num & pwr) inside the func
*/

//corroct: sqrFunc(10) => 100
// incorrect: sqrFunc(10, 2) => 100

// Answer:


const sqrFunc = (num, power=2) => {return Math.pow(num, power)};
console.log(sqrFunc(10)) // => 100

//-------------------------------------------------------------------------------------------

// Question4
/*
? look at the code below:
todo: 1. create an object which has three properties.
todo: 2. by using "for in" and modifying keys and values your result should be like this:
todo: 3. Mike is tall, Jake is kind, Lilly is young ({key} is {value})
*/
/**Write your code below */

const object4 ={
    Mike: 'tall',
    Jake: 'kind',
    Lilly: 'young',
};
let result = "";
for(let key in object4) {
    result += `${key} is ${object4[key]}, `;
};

console.log(result.slice(0, -2));

//-----------------------------------------------------------------------------------------------------

// Question5
//********check**********
/*
? look at the code below:
todo: 1. modify the missingLetters, put missing letters between b and f in it
todo: 2. modify arr, by using "spread operator" make a copy of 'missingLetters' inside arr and console.log() the arr
todo: 3. result should be like this ["a", "b", "c", "d", "e", "f", "g"]
*/

//const missingLetters = [];
let arr = ['a', 'b', 'f', 'g'];

// Answer:

const missingLetters = ['c', 'd', 'e'];
arr = ['a', 'b', ...missingLetters, 'f', 'g'];
console.log(arr);

//------------------------------------------------------------------------------------------------------------------

// Question6
/* 
? look at the code below
todo: 1. define an arry
todo: 2. pass the array to the function using the spread parameter when calling the function
todo: 3. the result should be like this " {Imagine Dragons} is a {Music} {Band}" (words inside {} are given as params)
*/
const music = (first, second, third) => {
    console.log(`${first} is a ${second} ${third}`);
};
let array = ['Imagine Dragon', 'Music', 'Band'];
music(...array);





