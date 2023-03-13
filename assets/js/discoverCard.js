import checkCards from "./checkCards.js";

let firstCard = "";
let secondCard = "";

export default function discoverCard(element) {
  if(element.className.includes("show-img")) {
    return;
  }

  if(firstCard == "") {
    element.classList.add("show-img");
    firstCard = element;

  } else if(secondCard == "") {
    element.classList.add("show-img");
    secondCard = element;

    checkCards(firstCard, secondCard);
    firstCard = "";
    secondCard = "";
  }
}

