/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

function gettingSequence(){
    let num1 = Math.floor(Math.random()*16);
    let num2 = Math.floor(Math.random()*16);
    let output = num1 + ", " + num2 + ", ";
    for(let i = 2; i < 10; i++){
        let num = (num1 + num2) * 2;
        output += num + ", ";
        num1 = num2;
        num2 = num;
    }
    console.log(output.slice(0, -2));
}
gettingSequence();

//or

// function gettingSequence(){
//     const sequence = [];
//     let num1 = Math.floor(Math.random()*16);
//     let num2 = Math.floor(Math.random()*16);
//     sequence.push(num1);
//     sequence.push(num2);
//     for(let i = 2; i < 10; i++){
//         let num = (sequence[i-2]+sequence[i-1])*2;
//         sequence.push(num);
//     }
//     return sequence;
// }
// const sequence = gettingSequence();
// console.log(sequence);