const cards = document.querySelectorAll('.gamecard');

let hasFlippedCard = false, lockBoard = false, firstCard, secondCard; 
/*let lockBoard = false;
let firstCard, secondCard;*/

function flipCard() {
	if (lockBoard || this === firstCard) return;
	
	this.classList.add('flip'); 

	if (!hasFlippedCard) {
		hasFlippedCard = true, firstCard = this;
		return;
	}
	secondCard = this;
	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.foto === secondCard.dataset.foto;
	isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
	resetBoard();
} 

function unFlipCards() {
	lockBoard = true;
	setTimeout(() => {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');

			resetBoard();
			}, 500);
}

function resetBoard() {
	[hasFlippedCard, lockBoard, firstCard, secondCard] = [false, false, null, null];
}

(function shuffle() {
 cards.forEach(card => {
		 let randomPos = Math.floor(Math.random() * 12);
		 card.style.order = randomPos;
		 });
 })();

cards.forEach(card => {card.addEventListener('click', flipCard);
		});
