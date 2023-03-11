import getImages from "./getImages.js";

//variables
const difficultModes = document.querySelectorAll("[name=difficult]");
const startBtn = document.querySelector(".start");
let numCards = 6;
//functions

//Events
difficultModes.forEach((mode) => {
    mode.addEventListener("click", ()=>{
        const difficultLevel = mode.id;

        if(difficultLevel == "medium") {
            numCards = 10;
        }

        if (difficultLevel == "hard") {
            numCards = 16;

        } 
        
        if (difficultLevel == "easy") {
            numCards = 6;
        }
    })
})

startBtn.addEventListener("click", ()=>{
    console.log(`btn Start clicado - jogo começará com ${numCards} cards`)
})


//getImages(5);