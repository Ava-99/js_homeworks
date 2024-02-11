/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
const getData = async () => {
  try {
    const respond = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respond.json();
    return data;
  } catch (e) {
    throw new Error();
  }
};
getData()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
