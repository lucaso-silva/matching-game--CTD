import gameFinished from "./gameFinished.js";

export default function checkCards(firstItem, secondItem, numItens) {
    const cardOne = firstItem.firstElementChild.getAttribute("src");
    const cardTwo = secondItem.firstElementChild.getAttribute("src");

    if(cardOne === cardTwo) {
        firstItem.classList.add("match");
        secondItem.classList.add("match");

        const cardsMatched = document.querySelectorAll(".match");

        if(cardsMatched.length == numItens) {
            gameFinished();
        }
    
    } else {
        setTimeout(()=>{
        
        firstItem.classList.remove("show-img");
        secondItem.classList.remove("show-img");
        }, 700)
    }
}