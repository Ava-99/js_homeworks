//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

async function updateData() {
  const newData = {
    firstName: "Lufy",
    lastName: "monkey. D",
    phoneNumber: "(945) 635-3854",
  };
  try {
    const respond = await fetch(
      "https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod/1",
      {
        method: "PUT",
        body: JSON.stringify(newData),
        headers: { "content-type": "application/json" },
      }
    );
    if (respond.ok) {
      console.log("data updated.");
    } else {
      console.error("failed");
    }
  } catch (error) {
    console.error("Error user updating", error);
  }
}
updateData()

//*To be continue...
