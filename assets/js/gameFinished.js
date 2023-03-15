import createGameBoard from "./createGameBoard.js";
import { numCards } from "./main.js"

const finishMessage = document.querySelector(".finish");
const divCards = document.querySelector(".cards");

export default function gameFinished() {
    finishMessage.classList.remove("hide");

    const btnRestart = document.querySelector(".restart");

    btnRestart.addEventListener("click", ()=>{
        finishMessage.classList.add("hide");
        divCards.innerHTML = "";
        createGameBoard(numCards);
    })
}