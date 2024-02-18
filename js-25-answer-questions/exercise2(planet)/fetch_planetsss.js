//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////

const getData = async () => {
  try {
    const response = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("error");
  }
};

let index = 0;
getData()
  .then((data) => {
    const destination = document.querySelector("#destination");
    destination.addEventListener("click", () => {
      if (index <= data.length) {
        const planetName = document.createElement("p");
        const planetDistance = document.createElement("p");
        planetName.textContent = ` Name: ${data[index].name}`;
        planetDistance.textContent = `Distance: ${data[index].distance}`;
        document.body.append(planetName);
        document.body.append(planetDistance);
        index++;
      }
    });
  })
  .catch((e) => {
    console.error(e);
  });
