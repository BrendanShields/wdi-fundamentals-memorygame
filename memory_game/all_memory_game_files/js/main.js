// Global cards Object for game //
	
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

/* shuffle: pass the cars array in as an argument, set a control, temporary placeholder
and an index reference, while the control is > 0 set index to a random number
up to the size of ctr, the next few lines move the cards btw the temp and array in order
to shuffle them. */
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
	while (ctr > 0) {
	    index = Math.floor(Math.random() * ctr);
	    ctr--;
	    temp = arra1[ctr];
	    arra1[ctr] = arra1[index];
	    arra1[index] = temp;
	    }
  return arra1;
}
cards = shuffle(cards);

//sets cards in play checks for match, returns result.
let cardsInPlay = [];
function checkForMatch () {
  var divResult = document.getElementById('result');
	if (cardsInPlay[0] === cardsInPlay[1]) {
    var content = document.createTextNode("You Win!!");
	divResult = document.getElementById('result').textContent = 'You Win!!';
	divResult.appendChild(content);
	  }else{
      var content = document.createTextNode("Better Luck Next Time!!");
	  divResult = document.getElementById('result').textContent = 'You Lose!!'
      divResult.appendChild(content);
	}
}

//takes the card data from createBoard & if 2 cards 
//flipped starts checkmatch function
function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
 	if (cardsInPlay.length === 2){
    checkForMatch();
	};
};

//creates an img element, passes the image data from the cards object
//then applies event listener to being flipcard function on click and
//appends the card to the game-board div
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

//sets event listener for button.
document.querySelector('button').addEventListener('click', reset)

//loops through the length of cards array finding the img nodes and
//removing them, shuffles the cards array, creates a new board and resets
//the value for cards in play before setting the result text to 'try again'
function reset () {
  for (i = 0; i < cards.length; i++) {
	var game = document.querySelector('img');
	game.parentNode.removeChild(game);
	}
	cards = shuffle(cards)
	createBoard()
	cardsInPlay = [];
	divResult = document.getElementById('result').textContent = 'Try Again!'
	}

