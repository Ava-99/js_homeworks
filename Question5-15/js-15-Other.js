// ? Question-1:select section counter by class name(.cards__card__img__icon) and save in variable "counterEl":
// !Answer:
const counterE1 = document.getElementsByClassName("cards__card__img__icon");
console.log(counterE1);
// var counterE1 = document.querySelector('.cards__card__img__icon');

// ? Question-2:select item counter by id(#counter) and save in variable "counter":
// !Answer:
var counter = document.getElementById("counter");
console.log(counter);

// ? Question-3:select section (.cards) and save in variable "card":
// !Answer:
var card = document.querySelector('.cards');
console.log(card);

// ? Question-4:select section (.cards__card) and save in variable "cards":
// !Answer:qsall
const cards = document.querySelectorAll('.cards__card');
console.log(cards);


// ? Question-5:select button secion card footer and save in variable "btnEl":
// !Answer:qs
// const btnE1 = document.querySelector('button');
const btnE1 = document.querySelector('.cards__card__footer__btn button')
console.log(btnE1);

// ? Question-6:select the img that has attribute "man" and show in console:
// !Answer:
const elements = document.querySelector("img[alt='man']");
console.log(elements);