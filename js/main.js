// /*----- constants -----*/
// const deck in other JS is entire deck of cards
const playerCards = [];
const opponentCards = [];
const score = {
    playerScore: 0,
    opponentScore: 0
};


// /*----- app's state (variables) -----*/
// use a board array to represent the cards in play
let winner;
// won rounds counter to 0


// /*----- cached element references -----*/
playerCard = document.getElementsByClassName('player');
opponentCard = document.getElementsByClassName('opponent');
warBtn = document.getElementById('war');
newGameBtn = document.getElementById('newGame');
statusBar = document.getElementsByTagName('a');
// cache the win round counter
// cache each theme option



// /*----- event listeners -----*/
newGameBtn.addEventListener('click', init);
warBtn.addEventListener('click', render);
// listen for click on "theme" buttons


// /*----- functions -----*/
function init() {
    console.log('new game button works');
};
// shuffle function
// use "new game" listener to start initialization
// initialize whose turn it is
// initialize winner to null so the turn can be played
// initialize the board to have no cards in play
// initialize the win round counter to 0
// call render function to start game when "WAR" button is pressed

function render() {
    console.log('WAR!!!!')
};
// render the play area
// flip one card from each deck array
// render a message to reflect a winner/loser/tie/game over
// wait for next click of "WAR" button

// check for winner function that determines which card is a higher value and declares that player who has that card the winner of the round
// add 1 to the won rounds counter of the player that won the hand
// play celebratory or dissapointing sound or tie sound
// return back to render function for next hand

