import finishGame from "./finishGame.js";

const movesInfo = document.querySelector(".moves");
let moves = 0;

export default function checkCards(firstItem, secondItem, numItens) {
    const cardOne = firstItem.firstElementChild.getAttribute("src");
    const cardTwo = secondItem.firstElementChild.getAttribute("src");

    if(cardOne === cardTwo) {
        firstItem.classList.add("match");
        secondItem.classList.add("match");
        moves++
        movesInfo.innerHTML = moves;

        const cardsMatched = document.querySelectorAll(".match");

        if(cardsMatched.length == numItens) {
            finishGame(moves);
            moves = 0;
        }
    
    } else {
        setTimeout(()=>{
        
        firstItem.classList.remove("show-img");
        secondItem.classList.remove("show-img");
        }, 700)
        moves++
        movesInfo.innerHTML = moves;
    }
}