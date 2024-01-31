// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

const cardsPlace = document.querySelector(".cards");
const headingPlace = document.querySelector(".cardSelected");

data.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("cards__card");
  const imgPlace = document.createElement("div");
  imgPlace.classList.add("cards__card__img");
  const cardsImg = document.createElement("img");
  cardsImg.setAttribute("src", element.src);
  const cardsIcon = document.createElement("i");
  cardsIcon.classList.add("cards__card__img__icon", "ri-heart-3-line");
  cardsIcon.innerText = "100";
  const titlePlace = document.createElement("h3");
  const spanPlace = document.createElement("span");
  titlePlace.innerText = element.title;
  spanPlace.innerText = "BSC";
  titlePlace.classList.add("cards__card__body__title");
  const footer = document.createElement("div");
  footer.classList.add("cards__card__footer");
  const userAccount = document.createElement("div");
  userAccount.classList.add("cards__card__footer__account");
  const userIcon = document.createElement("img");
  userIcon.setAttribute("src", element.accountImage);
  const userName = document.createElement("h4");
  userName.innerText = element.account;
  const buyButton = document.createElement("button");
  buyButton.innerText = "Please Bid";
  buyButton.classList.add("ri-handbag-line");
  buyButton.addEventListener("click", () => {
    headingPlace.innerText = `you Selected card #${element.id}`;
  });
  footer.append(userAccount, buyButton);
  userAccount.append(userIcon, userName);
  titlePlace.append(spanPlace);
  cardsPlace.append(card);
  card.append(imgPlace, titlePlace, footer);
  imgPlace.append(cardsImg, cardsIcon);
  console.log(card);
});
