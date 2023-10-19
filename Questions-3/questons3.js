//question1

console.log(3>2)


//question2

const first = 3;
const second = 1;
const third = 6;
console.log(second >= first, third >= first);


//question3

const numOne = 3;
const numTwo = 4;
const numThree = 2;
console.log(numOne <= numTwo, numTwo >= numThree);


//question4

const numbOne = 1;
const numbTwo = 4;
const numbThree = 2;
console.log(numbOne <= numbTwo, numbTwo >= numbThree);

//question5

let numbe = 10;
numbe += 5
if(numbe > 10){ console.log(`${numbe}`)}


//question6

let myVariable;
if(false){
    myVariable="..."
}
console.log(myVariable);


//question7

let number = 3;
if(number > 2){
    number = 1;
    console.log(number)
}


//question8

let text = "hello";
if(text === "hello"){
    text = text + " world"
}
console.log(text === "hello world");


//question9

const numbers = Math.floor(Math.random()* 10) + 1;
if(numbers % 2 === 0){
    console.log(`${numbers} is even.`);
}
if(numbers % 2 !== 0){
    console.log(`${numbers} is odd.`);
}


//question10

const theName = prompt("name:");
if(theName === "Darth Vader"){
    console.log(`${theName} is your father.`);
}
if(theName === "Leia"){
    console.log(`${theName} is your sister.`);
}
if(theName === "Han"){
    console.log(`${theName} is your brother in low.`);
}
if(theName === "R202"){
    console.log(`${theName} is your droid.`);
}


//question11

const aRandomIntiger = Math.ceil(Math.random() *1000);
if(aRandomIntiger % 100 === 0){
    console.log(true);
}
if(aRandomIntiger % 100 !== 0){
    console.log(false);
}


//question12

const stringCheck = prompt("write your string:");
if(stringCheck.length === 0){
    console.log("This string is blank!")
}
if(stringCheck.length !== 0){
    console.log(`This string is not blank and the length of it is ${stringCheck.length}`)
}


//question13

alert("I am an alert!");


//question14

const yourname = prompt("What's your name?");
alert(`My name is ${yourname}.`);


//question15

prompt("what is the sum of 30+50", "eighty");