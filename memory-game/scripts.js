var cards = document.querySelectorAll('.memory-card');

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');

  //determine if cards were clicked
  if(!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

//check if cards match using dataset, data in html
  //if they match, change event listener to prevent them from flipping
function checkForMatch() {
  if(firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard(); 
}

function unflipCards(){
  lockBoard = true;

  setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

  resetBoard()
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(function(card){
    var randomPos = Math.floor(Math.random()*12);
    card.style.order = randomPos;
  })
})();

cards.forEach(function(card){
  card.addEventListener('click', flipCard);
});