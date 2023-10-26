//Question-1:Write a code, give a number from 0 to 6, and show the day of the week.(If the number is out of rang 0 to 6,[ invalid number. Please enter a number between 0 to 6])


//Answer:
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let number = prompt("Write a number between 0 to 6:");
switch(number){
    case "0" :
       console.log(weekDays[0])
             break;
    case "1" :
        console.log(weekDays[1])
             break;         
    case "2" :
        console.log(weekDays[2])
             break;         
    case "3" :
        console.log(weekDays[3])
             break;         
    case "4" :
        console.log(weekDays[4])
             break;         
    case "5" :
        console.log(weekDays[5])
             break;         
    case "6" :
        console.log(weekDays[6])
             break;         
    default:
        console.error("invalid number. Please enter a number between 0 to 6")
}

//Queston-2 :Consider this array; if it contains the word 'javascript', print it to the console. The array contains javascript.otherwise print it. The array does not contain javascript. const languages = ["java", "kotlin", "javaScript", "python", "typeScript"];

//Answer:
const languages = ["java", "kotlin", "javaScript", "python", "typeScript"];
if(languages.includes("javascript")){
    console.log(languages)
} else{
    console.log("The array does not contain javascript.")
}
//or
//  const languages = ["java", "kotlin", "javaScript", "python", "typeScript"];
// if(languages.includes("javaScript")){
//     console.log(languages)
// } else{
//     console.log("The array does not contain javascript.")
// }


//Question-3 :Consider this array. Remove the colors blue and yellow.
//let colors = ["red", "green", "blue", "yellow", "orange"]
//Answer:
let colors = ["red", "green", "blue", "yellow", "orange"];
let removedColors = colors.splice(2, 2);
console.log(colors);

//Question-4 :Take these two arrays and convert them into one array.
let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];
//Answer:
let newNumbers = primeNumbers.concat(evenNumbers);
console.log(newNumbers);

//Question-5: Read these documents and write an example for each method.
const letters = ["a", "b", "c"];
//An example for the first one:
let check1 = letters.includes("a");
console.log(check1); //true
let check2 = letters.includes("A");
console.log(check2); //false
//An example for the second one:
console.log(letters.indexOf("a")); //The output is 0.
console.log(letters.indexOf("b")); //The output is 1.
console.log(letters.indexOf("c")); //The output is 2.
console.log(letters.indexOf("d")); //The output is -1.
//An example for the third one:
let sliced = letters.slice(1, 2);
console.log(letters); //The result show that this method is a non-destructive.
console.log(sliced); // The output is "b".
//An example for the fourth:
const lettersRevers = ["c", "b", "a"];
console.log(lettersRevers.sort());
//or
const anotherExample = [8, 5, 3, 6, 1];
console.log(anotherExample.sort());