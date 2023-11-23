//quize1
// 1.what is the difference between setTimeout and setInterval?

// Answer: setTimeout allowes us to run a function once after the interval of time.setInterval allowes us to run a function repeatedly, starting after the interval of time, then repeating countinuously at that interval.

//-----------------------------------------------------------------------------------------------------

//quize2
// Follow these steps:
// todo1: write a code that logs "wait 5 sec"
// todo2: and then after 5 seconds logs "ready?"
// todo3: and finally logs "jet" every one second
// todo4: ( write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

// Answer:
// console.log("wait 5 sec");
// setTimeout(function(){
//     console.log("Ready?");

//     let i = 0;
//     const intervalId = setInterval(function() {
//         console.log("jet");
//         i++;

//         if(i === 10) {
//             clearInterval(intervalId);
//         }
//     }, 1000)
// },5000);

//------------------------------------------------------------------------------------------------------

//quize3
// 3.write a code to implement search on array item and return the answer in an array 
//Example: 
const brands = [
    'dell',
    'hp',
    'asus',
    'lenovo',
    'apple',
    'acer',
    'samsung',
    'sony',
];
function brandsSearch(arr, query) {
    return arr.filter(item => item.startsWith(query));
}

console.log(brandsSearch(brands, 'le')); // result : [ 'lenovo' ]
console.log(brandsSearch(brands, 'sa'));// result : [ 'samsung' ]

//-------------------------------------------------------------------------------------------------------------

//quize4
//4.write an array with five elements for this function in order to the result become true.

const array4 =[11, 12, 13, 12, 11]; // to be completed

//DO NOT modify below code
 console.log(array4.every((num) => num > 10));

//---------------------------------------------------------------------------------------------------------------

//quize5
//5.write a code to show if there are any truthy values in the array below.
// Answer:
const array5 = ['0', null, '', 0];
function isTruthy(num) {
     return num.some(Boolean);
} 
console.log(isTruthy(array5));

//-----------------------------------------------------------------------------------------------------------------

//quize6
//6. write a reduce method to get the sum of all array items.
// Answer:
const arr = [31, 1, 7, 12, 27];
const sumOfAll = arr.reduce((a,b) => a+b);
console.log(sumOfAll);

//------------------------------------------------------------------------

//quize7
//7. write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false.
// Answer:
const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];

function lengthChecking(array7) {
    return array7.filter(item => item.length > 6).every((str) => str.length < 10);
};

console.log(lengthChecking(array))


//--------------------------------------------------------------------------------------------------------

//quize8
//8. write a function to calculate the average of array items using reduce.
// Answer:
const arr1 = [3, 5, 7, 2];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [11, 3, 1];

function average(arr) {
    // const sum = arr.reduce((a,b) => a + b, 0);
    // const average = sum/ arr.length;
    // return average; 
    //or 
    return (arr.reduce((a,b) => a + b, 0)) / arr.length;

}

console.log(average(arr1)); //result: 6
console.log(average(arr2)); //result: 3
console.log(average(arr3)); //result: 5

//----------------------------------------------------------------------------------------------
