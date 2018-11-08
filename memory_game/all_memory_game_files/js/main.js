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


function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
cards = shuffle(cards);


let cardsInPlay = [];

// checks for match, returns result;
function checkForMatch () {
	var divResult = document.getElementById('result');
	if (cardsInPlay[0] === cardsInPlay[1]) {
	var content = document.createTextNode("You Win!!");
	divResult.appendChild(content);
	}else{
	var content = document.createTextNode("You lose!!");
	divResult.appendChild(content);
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