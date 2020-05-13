// /*----- constants -----*/
const score = {
    playerScore: 0,
    opponentScore: 0
};


// /*----- app's state (variables) -----*/
let round;
let playerCards = [];
let opponentCards = [];
let shuffledDeck = [];
let playerCard;
let opponentCard;
let tieCards = [];

// /*----- cached element references -----*/
warBtn = document.getElementById('war');
newGameBtn = document.getElementById('newGame');
statusBar = document.querySelector('#status');
document.querySelector('#infoBar').innerHTML = `Player Cards: ${playerCards.length}, Opponent Cards: ${opponentCards.length}`


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
        statusBar.innerHTML = `Player wins this round!`
        document.querySelector('#infoBar').innerHTML = `Player Cards: ${playerCards.length}, Opponent Cards: ${opponentCards.length}`
   } else if(opponentCard.value > playerCard.value) {
    statusBar.innerHTML = `Opponent wins this round!`
    document.querySelector('#infoBar').innerHTML = `Player Cards: ${playerCards.length}, Opponent Cards: ${opponentCards.length}`
   } else if (opponentCard.value = playerCard.value) {
       statusBar.innerHTML = `Its a tie! WAR!!!`
       document.querySelector('#infoBar').innerHTML = `Player Cards: ${playerCards.length}, Opponent Cards: ${opponentCards.length}`
   }
   checkForWinner();
};

function checkForWinner() {
    if(playerCard.value > opponentCard.value) {
        score.playerScore += 1;  
        if(tieCards.length > 0) {
            playerCards.push(...tieCards);
            tieCards = [];
        } else{
            playerCards.push(playerCard);
            playerCards.push(opponentCard);
        }
    }else if (playerCard.value < opponentCard.value) {
        score.opponentScore += 1;
        if(tieCards.length > 0) {
            opponentCards.push(...tieCards);
            tieCards = [];
        } else{
            opponentCards.push(playerCard);
            opponentCards.push(opponentCard);
        }
    }else if (playerCard.value === opponentCard.value) {
        tieCards.push(playerCard, opponentCard);
        for(i=1; i <= 4; i++) {
            playCards(true);
        } 
        checkForWinner();
    }
}

function playCards(isTie) {
    playerCard = playerCards.shift();
    opponentCard = opponentCards.shift();
    document.querySelector('#player').setAttribute('class', playerCard.name);
    document.querySelector('#opponent').setAttribute('class', opponentCard.name);
    if (isTie) {
        tieCards.push(playerCard, opponentCard);
    }
};




// play celebratory or dissapointing sound or tie sound


