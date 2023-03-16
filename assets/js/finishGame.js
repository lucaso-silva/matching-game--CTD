import createGameBoard from "./createGameBoard.js";
import { numCards } from "./main.js"

const finishMessage = document.querySelector(".finish");
const divCards = document.querySelector(".cards");
const startBtn = document.querySelector(".start");
const numMoves = document.querySelector(".num-moves");

export default function finishGame(moves) {
    finishMessage.classList.remove("hide");
    startBtn.disabled = true;
    
    numMoves.innerHTML = moves;

    const btnPlayAgain = document.querySelector(".play-again");

    btnPlayAgain.addEventListener("click", ()=>{
        finishMessage.classList.add("hide");
        divCards.innerHTML = "";
        createGameBoard(numCards);
    })
}