//1.write a code to extract a specified number of characters from a string.

const alphabet = "abcdefghijklmnopqrstvwxyz";
const specificed = alphabet[18] + alphabet[19] + alphabet[0] + alphabet[17];
console.log(specificed);

 
//2.write a code to convert a string into abbreviated from.

const myFullName = "Ava-Narimani";
const firstPart = myFullName.slice(0, 5);
console.log(firstPart);


//3.write a code that hides email addresses by replacing the first 5 characters with (*) to prevent unauthorized access.

const myEmailAddress = "faezenarimani2018@gmail.com";
const hiddenName = myEmailAddress.replace("faeze", "*****");
console.log(hiddenName);


//4.write a code to concatenate a given string n times togrther.(Random times between 1 and 100)

const mood = " :) ";
console.log(mood.repeat(Math.ceil(Math.random() *100)));


//5.write a code to insert a given string ("aps") within a string at a particular position(insert aps somewhere between a random string's letters like your name).

const statement = "I am not sara.";
console.log(statement.replace("sara", "Ava"));


//6.write a code to truncate the given string and put (...) after 30 character: we are using JavaScript in APS for learning web development and it is one of the most popular languages among programmers

const givenString = "we are using JavaScript in APS for learning web development and it is one of the most popular languages among programmers";
console.log( givenString.slice(0,32).replace('f','...'));


//7.write a code to check if a specific word exists in a string.

const sentence = "I am Ava Narimani.";
//const word = "Ava";
//console.log(sentence.includes(word));
console.log(sentence.indexOf('Ava'))




//8.convert all 'Hi' in the text below to 'Hello'.:"Hi World. Hi everyone. Hi you. Hi be to yar ghadimi, mnm hamon havadar ghadimi."

let text = "Hi World. Hi everyone. Hi you. Hi be to yar ghadimi, mnm hamon havadar ghadimi.";
console.log(text.replaceAll('Hi', 'Hello'));


//9.write a code that calculates the square root of 16

console.log(Math.sqrt(16));