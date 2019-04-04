// const cards = document.querySelectorAll('.gamecard');

let hasFlippedCard = false, lockBoard = false, firstCard, secondCard; 

function flipCard() {
	if (lockBoard || this === firstCard) return;
	console.log(this);
	
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

 function shuffle(code) {
  code.forEach(card => {
 		 let randomPos = Math.floor(Math.random() * 12);
 		 card.style.order = randomPos;
 		 });
  }

// cards.forEach(card => {card.addEventListener('click', flipCard)});
function IncreaseCards(selection) {
	
	if (document.getElementById('body').hasChildNodes()) {
		document.getElementById('body').removeChild(document.getElementById('body').childNodes[0]);
	}

 	var Section = document.createElement('Section');
     	Section.classList.add('gameboard');

 	let gameDiv = document.getElementById('body');

 	var Cards = [`./images/five.svg`, `./images/five.svg`, `./images/four.svg`, 
 				`./images/four.svg`,`./images/one.svg`,`./images/one.svg`,`./images/peng.svg`, `./images/peng.svg`, 
 				`./images/three.svg`,`./images/three.svg`, `./images/two.svg`, `./images/two.svg`,];

 	const dataArray = ["uno","uno", "dos","dos", "tres","tres", "cuatro","cuatro", "cinco","cinco", "pinguino","pinguino"];	


 	for (var i = 0;	i < selection; i++) {
 			var divs = document.createElement('div');
 			divs.classList.add("gamecard");
 			
 			divs.dataset.foto=dataArray	[i];
		 	var frontface = document.createElement('img');
 			frontface.src=Cards[i];
 			frontface.classList.add("frontface");
 			divs.appendChild(frontface);

 			var backface = document.createElement("img");
 			backface.src=`./images/questionmark.svg`;
 			backface.classList.add("backface");

 			divs.appendChild(backface);
 			Section.appendChild(divs);


console.log(i);
 	}

		gameDiv.appendChild(Section)
 	  document.body.appendChild(gameDiv);

 	const cards = document.querySelectorAll('.gamecard');
	console.log(cards);
	
		// Cards.forEach(card => {card.addEventListener('click', flipCard())});
	cards.forEach(card => card.addEventListener('click', flipCard));

	shuffle(cards);
 }
 
function Stages() {
	
	var listOfDifficulty = parseInt(document.getElementById('Selector').value); 
	// var novice = parseInt(document.getElementById('starter').value);  
	// var intermediate = paresInt(document.getElementById('medium').value);
	// var advanced = parseInt(document.getElementById('expert').value);

	IncreaseCards(listOfDifficulty);

}