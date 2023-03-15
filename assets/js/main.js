import createGameBoard from "./createGameBoard.js";
//import findMatches from "./findMatches.js";


//variables
const difficultModes = document.querySelectorAll("[name=difficult]");
const startBtn = document.querySelector(".start");
const displayRules = document.querySelector(".rules");
const gameBoard = document.querySelector(".game");

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
    displayRules.classList.add("hide");
    gameBoard.classList.remove("hide");
        
    createGameBoard(numCards);

});


