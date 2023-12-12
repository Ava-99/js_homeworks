//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

const cards = document.querySelectorAll(".card");

const characterImages = {
  "Harry Potter": "https://cdn.zoomg.ir/2015/04/Harry-potter.jpeg",
  "Hermione Granger":
    "https://awsimages.detik.net.id/community/media/visual/2021/11/16/hermione-granger.png?w=600&q=90",
  "Ron Weasley": "https://i.ebayimg.com/images/g/bAMAAOSwAKtinp6Q/s-l1600.jpg",
  "Severus Snape": "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg",
  "Draco Malfoy":
    "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
  "Cedric Diggory":
    "https://upload.wikimedia.org/wikipedia/sh/1/11/Cedric_Diggory.jpg",
  "Lord Voldemort":
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Lordvoldemort.jpg/330px-Lordvoldemort.jpg",
  "Bellatrix Lestrange":
    "https://upload.wikimedia.org/wikipedia/en/d/d8/Bellatrix.jpeg",
};

cards.forEach((card) => {
  const characterName = card.querySelector(".name").textContent;
  const characterImage = characterImages[characterName];
  const imgElement = card.querySelector("img");
  imgElement.src = characterImage;
});
