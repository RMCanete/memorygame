const gameContainer = document.getElementById("game");
let card1;
let card2;
let matchedCards = 0;
let correct = false;
let flippedCards = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  
  let currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList;
       
  if (!card1 || !card2){
    card1 = card1 || currentCard;
    if (card1 === currentCard){ 
      card2 = null;
    }
    else {
      card2 = currentCard;
    }
  }

  if (card1 && card2) {
    let color1 = card1.className;
    let color2 = card2.className;
    correct = true;
    
    if(color1 != color2){
      setTimeout(function(){
    card1.style.backgroundColor = "white";
      card2.style.backgroundColor = "white";
      card1 = null;
      card2 = null;
      correct = false;
    }, 1000)
    matchedCards -= 1
    }
    else {
      matchedCards += 2;
      card1.removeEventListener('click', handleCardClick);
      card2.removeEventListener('click', handleCardClick);
      card1 = null;
      card2 = null;
      correct = false;
      flippedCards +=2;
      }
    } 
   score = document.getElementById('score').innerHTML = "SCORE: " + matchedCards;  
   if (flippedCards === COLORS.length){
     alert(`GAME OVER! YOU SCORED ${matchedCards}!`)
   }
}

// when the DOM loads
createDivsForColors(shuffledColors);
