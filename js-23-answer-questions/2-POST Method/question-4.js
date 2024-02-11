// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
// const users = [
//   {
//     firstName: "Grattan",
//     lastName: "Dalton",
//   },
//   {
//     firstName: "William",
//     lastName: "Dalton",
//   },
//   {
//     firstName: "Robert",
//     lastName: "Dalton",
//   },
// ];

// /** WRITE YOUR CODE BELOW DOWN */

// const addUser = async (users) => {
//   for (const user of users) {
//     try {
//       const response = await fetch(
//         "https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod" ,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log("user added:", data);
//     } catch (error) {
//       console.error("There was a problem adding the user:", error);
//     }
//   }
// };
// addUser(users);

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

const form = document.querySelector("form");
const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const button = document.querySelector("button");

const phoneNum = document.createElement("input");
phoneNum.style.margin="5px"
phoneNum.setAttribute("id", "phoneNum");
phoneNum.setAttribute("type", "tel");

const phoneNumLabel = document.createElement("label");
phoneNumLabel.setAttribute("for", "phoneNum");
phoneNumLabel.innerText = "Phone Number:";

form.append(phoneNum, phoneNumLabel);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const person = {
    firstName: fName.value,
    lastName: lName.value,
    phoneNumber: phoneNum.value,
  };

  const respond = await fetch(
    "https://65c3fa8c57a483fcb1433450.mockapi.io/postmethod",
    {
      method: "POST",
      body: JSON.stringify(person),
      headers: { "content-type": "application/json" },
    }
  );

  const data=await respond.json();
  console.log(data);
});

//*To be continue...
