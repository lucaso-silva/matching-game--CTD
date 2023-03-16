import createGameBoard from "./createGameBoard.js";

const difficultModes = document.querySelectorAll("[name=difficult]");
const startBtn = document.querySelector(".start");
const displayRules = document.querySelector(".rules");
const gameBoard = document.querySelector(".game");
const divCards = document.querySelector(".cards");

let numCards = 6;

difficultModes.forEach((mode) => {
  mode.addEventListener("click", () => {
    const difficultLevel = mode.id;

    if (difficultLevel == "easy") {
      numCards = 6;
      divCards.classList.remove("medium-cards");
      divCards.classList.remove("hard-cards");
    }

    if (difficultLevel == "medium") {
      numCards = 10;
      divCards.classList.remove("hard-cards");
      divCards.classList.add("medium-cards");
    }

    if (difficultLevel == "hard") {
      numCards = 16;
      divCards.classList.remove("medium-cards");
      divCards.classList.add("hard-cards");
    }
  });
});

startBtn.addEventListener("click", () => {  
    displayRules.classList.add("hide");
    gameBoard.classList.remove("hide");
    divCards.innerHTML = "";    
    createGameBoard(numCards);

});

export { numCards };


