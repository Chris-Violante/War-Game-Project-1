// /*----- constants -----*/
// const deck in other JS is entire deck of cards
const score = {
    playerScore: 0,
    opponentScore: 0
};


// /*----- app's state (variables) -----*/
// use a board array to represent the cards in play
let round;
let playerCards = [];
let opponentCards = [];
let shuffledDeck = [];
let playerCard;
let opponentCard;

// /*----- cached element references -----*/
warBtn = document.getElementById('war');
newGameBtn = document.getElementById('newGame');
statusBar = document.querySelector('#status');
// cache the win round counter
// cache each theme option



// /*----- event listeners -----*/
newGameBtn.addEventListener('click', init);
warBtn.addEventListener('click', render);
// listen for click on "theme" buttons


// /*----- functions -----*/
function init() {
   shuffledDeck = (shuffleCards(deck));
   playerCards = (shuffledDeck.slice(0, 26)); 
   opponentCards = (shuffledDeck.slice(26, 52));
    score.playerScore = 0;
    score.opponentScore = 0;
    round = 0;
};

function render() {
    if (opponentCards.length === 0) {
        statusBar.innerHTML = "Player wins the game!!!!"
    }
    if (playerCards.length === 0){
        statusBar.innerHTML = "Opponent wins the game :("     
    }
       playCards();
   if(playerCard.value > opponentCard.value) {
        statusBar.innerHTML = "Player wins this round!"
   } else if(opponentCard.value > playerCard.value) {
    statusBar.innerHTML = "Opponent wins this round!"
   } else if (opponentCard.value = playerCard.value) {
       statusBar.innerHTML = "Its a tie! WAR!!!"
   }
   checkForWinner();
};

function checkForWinner() {
       if(playerCard.value > opponentCard.value) {
        score.playerScore += 1
    }else if (playerCard.value < opponentCard.value) {
        score.opponentScore += 1
    }else if (playerCard.value === opponentCard.value) {
        for(i=1; i <= 4; i++) {
            playCards();
        } 
        checkForWinner();
    }
}

function playCards() {
    playerCard = playerCards.shift();
    opponentCard = opponentCards.shift();
    document.querySelector('#player').setAttribute('class', playerCard.name);
    document.querySelector('#opponent').setAttribute('class', opponentCard.name);
};



// check for winner function that determines which card is a higher value and declares that player who has that card the winner of the round
// move cards of hand played to the end of the winners cards
// add 1 to the won rounds counter of the player that won the hand
// play celebratory or dissapointing sound or tie sound
// return back to render function for next hand

