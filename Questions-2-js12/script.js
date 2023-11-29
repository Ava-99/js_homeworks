// 1. Convert the code below using obj destructuring to get a best practice code:

const obj = {number: 6043, age: 21, pt: 96 };
// const number = obj.number;
// const age = obj.age;
// const pt = obj.pt;
// console.log(number, age, pt);

// !Answer:

const {number, age, pt} = obj;
console.log(number, age, pt);

//-----------------------------------------------------------------------------------

//2. Rewrite the code below to use array destructuring instead of assigning each value to a variable.

let item = ['Egg', 0.25, 12];
// let name = item[0];
// let price = item[1];
// let quantity = item[3];
// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

// !Answer:

const [name, price, quantity] = item;
console.log(name, price, quantity);

//---------------------------------------------------------------------------------------------------------

//3. Complete the code below to get the expected result.

[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // Expected output: Array [30, 40, 50]

//---------------------------------------------------------------

// 4. Change two or more values of this object.
// todo: one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
    id: 'kd455',
    age: 24,
    username: 'john2000',
    skills: ['html', 'css', 'js'],
}

// !Answer:

obj2.skills[0] = 'python';
console.log(obj2.skills);

//---------------------------------------------------------------------------------------------------------------

// 5. Modify the array of object blow with (for of) like this:
// todo: if the gamer_id is 1002 change the gamer_name as you like

let gamers_data = [
    {
        gamer_id: 1001,
        gamer_name: 'Jason',
    },
    {
        gamer_id: 1002,
        gamer_name:'Ali',
    },
    {
        gamer_id: 1003,
        gamer_name: 'Mathew'
    },
];

// !Answer:

const modifiedGamersData = gamers_data.map (obj => {
    if (obj.gamer_id === 1002) {
        return { ...obj, gamer_name:'Ava'};
    };
    return obj;
});
console.log(modifiedGamersData);

//or

// for (let obj2 of gamers_data) {
//     if(obj2.gamer_id === 1002){
//         modifiedGamersData2 = {...obj2, gamer_name: 'Ava'};
//     }
// }
// console.log(modifiedGamersData2);

//------------------------------------------------------------------------------------

// 6. We have an object called 'user'.
// Write the destructuring assignment that converts:
// todo1 : 'name2' property into the variable 'firstName'.
// todo2 : 'years' property into the variable 'age2'.
// todo3 : 'admin' property into the variable 'isAdmin'.(if no such property exists create 'isAdmin' variable and assign false value to that)

let user = { name2: 'John', years: 30};



// !Answer:


   user.admin = false
 const { name2: firstName, years: age2,  admin:isAdmin,} = user;
  console.log(firstName); //John
  console.log(age2); //30
 console.log(isAdmin); //false

//--------------------------------------------------------------------------------------------------------

// 7.Using Array Destructuring, get the last name from the array.
// todo: notice that 'Christina' is firsrName , 'John' is middleName , 'Alexandare' is lastName.

const students = ['Christina', 'John', 'Alexandare'];

// !Answer:
 
const [ ,, last] = students;
console.log(last);

//---------------------------------------------------------------------------------------------------

// 8. Use Array Destructuring to get all of the names from this Nested Array.
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

// !Answer:

const [ name1, [name2, name3], [name4, name5]] = moreStudents;
console.log(name1, name2, name3, name4, name5);

//--------------------------------------------------------------------------------

// 9. Get the '4' from numbers array using destructuring.
// todo: Replace the legs property in person object, with above value('4').

const numbers = ['2', '3', '4'];
const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x',
        },
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x',
    },
};

// !Answer:
const [number1, number2, number3] = numbers;
const newPerson = {...person, body:{...person.body, legs: number3,},};
 console.log(newPerson);

//-----------------------------------------------------------------------------------------

// 10. Write a function which accepts a single array argument.
// todo1: It should return an object with the keys first, second, third, and rest.
// todo2: first: the first element in the array.
// todo3: second: the second element in the array.
// todo4: third: the third element in the array.
// todo5: rest: all other elements in the array.
// hint: You can write a one line function to make this work using : An arrow function and array destructuring in the function argument

const arrayOfName = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];

// !Answer:

const object = ([first, second, third, ...rest]) => ({first, second, third, rest});
console.log(object(arrayOfName));

//------------------------------------------------------------------------------------------------------------------

// 11. Write a function called displayName() that taken an object as an argument.
// todo1: Print the person's first and last name.
// todo2: Use object destructuring in the function argument.
// todo3: Use template string when printing the first and last name.

const person2 = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X',
};

// !Answer:

function displayName({first, last}) {
    console.log(`firstname is "${first}" and lastname is "${last}".`);
};
displayName(person2);

//-------------------------------------------------------------------------------------------

// 12. Creat a function named goToSecondClass()
// todo1 : destructure the object in the function argument.
// todo2 : pass 'myClasses' object to the function.
// todo3 : The function should return this statement ==> "Time to go to {property_value} class!"

const myClasses = {
    firstHour: 'Ethic',
    secondHour: 'Programming',
    thirdHour: 'Biology',
};

// Example Output: "Time to go to Programming class!"

// !Answer:

function goToSecondClass({firstHour, secondHour, thirdHour}){
    console.log(`Time to go to ${secondHour} class!`);
};
goToSecondClass(myClasses);

//------------------------------------------------------------------------------------------------------