//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

async function deleteData() {
  try {
    const res = await fetch(
      "https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod"
    );
    const data = await res.json();
    data.forEach((element) => {
      if (element.lastName === "Dalton") {
        fetch(
          `https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod/${element.id}`,
          {
            method: "DELETE",
          }
        );
         console.log('users deleted.')
      }
    });
  } catch (error) {
    console.log(`Error:${error}`);
  }
}
deleteData();

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */

async function deleteEvenIds() {
  try {
    const res = await fetch(
      "https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod"
    );
    const data = await res.json();
    data.forEach(async (element) => {
      if (element.id % 2 === 0) {
        await fetch(
          `"https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod"/${element.id}`,
          {
            method: "DELETE",
          }
        );
        console.log("users deleted!");
      }
    });
  } catch (error) {
    console.log(`Error :${error}`);
  }
}
deleteEvenIds();
//*End of story :)
