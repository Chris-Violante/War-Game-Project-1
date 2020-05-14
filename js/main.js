// /*----- app's state (variables) -----*/
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



// /*----- event listeners -----*/
newGameBtn.addEventListener('click', init);
warBtn.addEventListener('click', render);



// /*----- functions -----*/
function init() {
   shuffledDeck = (shuffleCards(deck));
   playerCards = (shuffledDeck.slice(0, 26)); 
   opponentCards = (shuffledDeck.slice(26, 52));
    document.querySelector('#infoBar').innerHTML = `Player Cards: ${playerCards.length} Opponent Cards: ${opponentCards.length}`
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
        if(tieCards.length > 0) {
            playerCards.push(...tieCards);
            tieCards = [];
        } else{
            playerCards.push(playerCard);
            playerCards.push(opponentCard);
        }
    }else if (playerCard.value < opponentCard.value) {
        if(tieCards.length > 0) {
            opponentCards.push(...tieCards);
            tieCards = [];
        } else{
            opponentCards.push(playerCard);
            opponentCards.push(opponentCard);
        }
    }else if (playerCard.value === opponentCard.value) 
        setTimeout(function(){{
       tieCards.push(playerCard, opponentCard);
        for(i=1; i <= 4; i++) {
                playCards(true);
       } 
        checkForWinner();
    }},2000)
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







