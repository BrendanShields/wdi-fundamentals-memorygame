
// Global Variables for card game;
let cards 		= ['queenOfDiamonds','queenOfHearts','kingOfDiamonds','kingOfHearts']
let cardsInPlay = [];

// checks for match, returns result;
function checkForMatch () {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
}else{console.log("Sorry, try again.");}}


// Function logging cards flipped, pushing result of user input & running checkMatch
var flipCard = function(cardId) {
console.log(`You flipped ${cards[cardId]}`);
cardsInPlay.push(cards[cardId]);
checkForMatch()}

//userInput
flipCard(1)
flipCard(1)