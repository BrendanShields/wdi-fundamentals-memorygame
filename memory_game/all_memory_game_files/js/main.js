
// Global Variables for card game;
let cards 		= 
[{rank: 'queen',
 suit: 'hearts',
 cardImage: "images/queen-of-hearts.png"},

 {rank: 'queen',
 suit: 'diamonds',
 cardImage: "images/queen-of-diamonds.png"},

 {rank: 'king',
 suit: 'hearts',
 cardImage: "images/king-of-hearts.png"},

 {rank: 'king',
 suit: 'diamonds',
 cardImage: "images/king-of-diamonds.png"}]



let cardsInPlay = [];

// checks for match, returns result;
function checkForMatch () {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
alert('You Win!')
}else{console.log("Sorry, try again."); 
	  alert('You lose!')}}


// Function logging cards flipped, pushing result of user input & running checkMatch
var flipCard = function(cardId) {
console.log(`You flipped the ${cards[cardId].rank} of ${cards[cardId].suit} ${cards[cardId].cardImage}`);
cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length == 2) 
	{checkForMatch()}
}

//userInput
flipCard(2)
flipCard(1)