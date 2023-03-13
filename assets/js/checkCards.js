export default function checkCards(firstItem, secondItem) {
    const cardOne = firstItem.firstElementChild.getAttribute("src");
    const cardTwo = secondItem.firstElementChild.getAttribute("src");

    if(cardOne === cardTwo) {
        console.log("same Card!")
    
    } else {
        setTimeout(()=>{
        
        firstItem.classList.remove("show-img");
        secondItem.classList.remove("show-img");
        }, 700)
    }
}