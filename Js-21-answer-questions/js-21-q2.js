// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(persons) {
  persons.forEach((person) => {
    console.log(`name:${person.name}, age:${person.age}`);
  });
}

printPersons(persons);
