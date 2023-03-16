# Matching-Game--CTD

https://user-images.githubusercontent.com/97140968/225678686-99f11208-3004-4690-9666-ef8de5289d8b.mp4

### Play in the [link](https://lucaso-silva.github.io/matching-game--CTD/)

## Overview
This Matching Game is part of my daily purpose of coding every day, and so delivering a new project every week.

The game was developed using HTML, CSS, and JavaScript. To obtain the pictures of the cards it was utilized the free [DOG API](https://dog.ceo/dog-api/).  

> Status: Concluded 

---

### Objectives
- Build the optimal layout for the site depending on the device's screen size ✅
- Obtain card images through a third API ✅
- Choose the game difficulty between Easy, Medium, and Hard modes ✅
- Start the game according to the difficulty mode chosen ✅
- Discover and compare only two cards by round ✅
- Count the number of tries to match the cards ✅
- Finish, and so restart the game when all cards are matched ✅

## Built with
- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- Flexbox
- CSS-grid
- JavaScript

## What I learned 💡
To build this Matching Game I planned from the layout design to the game functionalities.

The main objective of this project was to improve my knowledge of JavaScript programming, so I chose to use a third API as the way to obtain the pictures of the cards, and insert these cards in the Game Board through DOM  Manipulation.

To obtain a clone of the cards deck, firstly I duplicated my array of cards using the Spread Operator `...`, then I saved these 2 array copies into a new variable, which I named as cardsDeck.
```JavaScript 
export default async function createGameBoard(numCards) {
  const URL_API = `https://dog.ceo/api/breed/pug/images/random/${numCards}`;

  const res = await fetch(URL_API);
  const data = await res.json();
  const listImgs = data.message;
  const cardsDeck = [...listImgs, ...listImgs];

  const shuffledCards = shuffleCards(cardsDeck);
```
The necessity of shuffling the cards before the game started was achieved using the Fisher-Yates Algorithm, which was named as the function shuffle Cards(cardsDeck) using as a parameter the array cardsDeck.

```JavaScript 
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}
```

---
### 🛠️ Continued development
The next steps will be focused on : 
- Coding refactoring
- Fix a bug found in the counter "Moves" (when the game is restarted without it finished, this counter doesn't assume the zero value).
- Block the difficulties selector during the game running, due to avoid it to change .cards Grid-layout properties.

---

### Useful resources
- [CSS-Tricks Guides](https://css-tricks.com/guides/)
- [How to shuffle an array in JavaScript](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj) 

