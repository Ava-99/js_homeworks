//Question-1: write a function to give this array and split negative numbers and positive numbers.
//const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];
//!Answer:

const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];
function seprateNegetives(arr) {
    const negative =[] ;
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] < 0) {
         negative.push(arr[i]);
      }
    }
    return negative;
}
function sepratePositive(arr) {
    const positive =[] ;
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] > 0) {
         positive.push(arr[i]);
      }
    }
    return positive;
}
function seprateZero(arr) {
    const notNegativeNotPositive =[] ;
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] === 0) {
        notNegativeNotPositive.push(arr[i]);
      }
    }
    return notNegativeNotPositive;
}
console.log(sepratePositive(numbers));
console.log(seprateZero(numbers));
console.log(seprateNegetives(numbers));

//or

// const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];
// function sepration(numbers) {
//     const positive =[] ;
//     const negative =[] ;
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] < 0) {
//          negative.push(numbers[i]);
//       } else {
//          positive.push(numbers[i]);
//       }
//     }
//     return[negative, positive]
// }
// console.log(sepration(numbers));


//Question-2: write a function to find the biggest number in this array and push to a new array.
//const findBigNumber = [5, 2, -10, 50, 35];
//!Answer:

const findBigNumber = [5, 2, -10, 50, 35];


function finder(arr){
    let biggest = [];
    for (let i = 0; i < arr.length; i++) {
        if(findBigNumber[i] > biggest){
            biggest = findBigNumber[i];
        }
    }
    findBigesst =[]
    findBigesst.push(biggest);
    return findBigesst;
} 

let resulOfFinder = finder(findBigNumber);
console.log(finder(findBigNumber));


//Question-3: write a function to remove all the items wich are not number from the array and show a new array.
//const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null];
//!Answer:

const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null];
const numberArray =[] ;
 function newarray(arr) {
       //const numberArray =[] ;
     for (let i = 0; i < arr.length; i++) {
       if (typeof notNumberArray[i] === typeof 1) {
          numberArray.push(arr[i]);
       }
     }
     
     return numberArray;
 }

console.log(newarray(notNumberArray));

//Question-4: consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number
// todo3: calculate the sum of all its numbers
//!Answer:


 function sumOfNewArray(numberArray){
     let sumArray = 0;
     for (let i = 0; i < numberArray.length; i++) {
         sumArray += numberArray[i]
     }
     return sumArray;
 }
 console.log(sumOfNewArray(numberArray));
 console.log(typeof sumOfNewArray(numberArray));

//Question-5: write a function to reverse a string.(hint:first,convert to array, but answer must to be string)
//"google" => "elgoog"
//! you can search how to reverse string
//!Answer:

// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("google"));
// console.log(typeof reverseString("google"));

//or

function reverseString1(str){
    let newString = "";
    for (let i = str.length -1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseString1("google"));
console.log(typeof reverseString1("google"));
