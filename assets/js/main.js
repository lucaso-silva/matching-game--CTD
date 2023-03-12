import createGameBoard from "./createGameBoard.js";
//import findMatches from "./findMatches.js";


//variables
const difficultModes = document.querySelectorAll("[name=difficult]");
const startBtn = document.querySelector(".start");

let numCards = 6;

//functions


//Events
difficultModes.forEach((mode) => {
  mode.addEventListener("click", () => {
    const difficultLevel = mode.id;

    if (difficultLevel == "easy") {
      numCards = 6;
    }

    if (difficultLevel == "medium") {
      numCards = 10;
    }

    if (difficultLevel == "hard") {
      numCards = 16;
    }
  });
});

startBtn.addEventListener("click", () => {    
    createGameBoard(numCards);
});


