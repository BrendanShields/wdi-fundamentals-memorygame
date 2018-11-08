// Global Variables for card game;
let cards 		= 
	[{rank: 'queen',
	 suit: 'hearts',
	 cardImage: "all_memory_game_files/images/queen-of-hearts.png"},

	 {rank: 'queen',
	 suit: 'diamonds',
	 cardImage: "all_memory_game_files/images/queen-of-diamonds.png"},

	 {rank: 'king',
	 suit: 'hearts',
	 cardImage: "all_memory_game_files/images/king-of-hearts.png"},

	 {rank: 'king',
	 suit: 'diamonds',
	 cardImage: "all_memory_game_files/images/king-of-diamonds.png"}]



let cardsInPlay = [];

// checks for match, returns result;
function checkForMatch () {
	var divResult = document.getElementById('result');
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	alert('You Win!')
	}else{console.log("Sorry, try again."); 
	alert('You lose!')
	}
}

function flipCard() {
    var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);
 if (cardsInPlay.length === 2){
    checkForMatch();
	};
};

function createBoard () {
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement("img");      
	cardElement.setAttribute('src', 'all_memory_game_files/images/back.png');
	cardElement.setAttribute('data-id', i)
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);

}
	}


createBoard()