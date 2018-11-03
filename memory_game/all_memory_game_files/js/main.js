
// Global Variables for card game;

let cards 		= ['queenOfDiamonds','queenOfHearts','kingOfDiamonds','kingOfHearts']
let cardsInPlay = [];

// User Choice;

var cardOne 	= cards[0]
var cardTwo 	= cards[1]

// Push result of User Choice into CardsInPlay Array;

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//Log to console User Choice

console.log('You flipped ' + cardsInPlay[0] + ' and ' + cardsInPlay[1]);

// Checks whether user has chosen the two cards, if they have, and they are equal return win else lose;

if (cardsInPlay.length === 2) {
if (cardsInPlay[0] 	   === cardsInPlay[1]) {
		alert('You Win')
} else {
		alert('You Lose')
}
}