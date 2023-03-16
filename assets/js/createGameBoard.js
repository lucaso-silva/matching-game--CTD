import shuffleCards from "./shuffleCards.js";
import discoverCard from "./discoverCard.js";

const divCards = document.querySelector(".cards");
const startBtn = document.querySelector(".start");
const movesInfo = document.querySelector(".moves");

export default async function createGameBoard(numCards) {
  const URL_API = `https://dog.ceo/api/breed/pug/images/random/${numCards}`;

  const res = await fetch(URL_API);
  const data = await res.json();
  const listImgs = data.message;
  const cardsDeck = [...listImgs, ...listImgs];

  const shuffledCards = shuffleCards(cardsDeck);
  divCards.innerHTML = "";

  for (let i = 0; i < shuffledCards.length; i++) {
    let urlImgCard = shuffledCards[i];

    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img");
    imgCard.setAttribute("src", urlImgCard);
    imgCard.setAttribute("alt", "Dog Image");

    divCard.appendChild(imgCard);

    divCards.appendChild(divCard);
  }

  startBtn.innerHTML = "Restart"
  startBtn.classList.add("restart");
  startBtn.disabled = false;
  movesInfo.innerHTML = "";

  const allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      discoverCard(card, allCards);      
    });
  });
}