
// Selecting Elements

const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDisplay = document.getElementById('p2Score');
let inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');
const wScoreDisplay = document.querySelector('p span');

// Environment Setup

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let gameOver = false;

// Adding Event Listener

p1Btn.addEventListener('click', () => {
	// console.log('Clicked PB-1');
	if (!gameOver) {
		p1Score++;
		winner(p1Score, winningScore);

		// if (p1Score === winningScore) {
		// 	gameOver = true;
		// 	console.log('Game Over!');
		// 	p1Btn.setAttribute('disabled', 'disabled');
		// 	p2Btn.setAttribute('disabled', 'disabled');
		// }
		p1ScoreDisplay.textContent = p1Score;
	}
});

p2Btn.addEventListener('click', () => {
	// console.log('Clicked PB-2');
	if (!gameOver) {
		p2Score++;
		winner(p2Score, winningScore);

		// if (p2Score === winningScore) {
		// 	gameOver = true;
		// 	console.log('Game Over!');
		// 	p1Btn.setAttribute('disabled', 'disabled');
		// 	p2Btn.setAttribute('disabled', 'disabled');
		// }
		p2ScoreDisplay.textContent = p2Score;
	}
});

// Fucntion to avoid code repeatation

function winner(oldScore, winningScore) {
	if (oldScore === winningScore) {

		if (p1Score === winningScore) {
			p1ScoreDisplay.classList.add('text-success');
			p2ScoreDisplay.classList.add('text-danger');
		} else {
			p2ScoreDisplay.classList.add('text-success');
			p1ScoreDisplay.classList.add('text-danger');
		}

		gameOver = true;
		p1Btn.setAttribute('disabled', 'disabled');
		p2Btn.setAttribute('disabled', 'disabled');
		alert('Game Over!');
	}
}

// Change Input Value

inputScore.addEventListener('change', () => {
	winningScore = Number(inputScore.value);
	console.log(typeof inputScore.value);
	wScoreDisplay.textContent = inputScore.value;
	inputScore.value = '';

	reset();
})

// Set-up Reset btn

function reset() {
	p1Score = 0;
	p1ScoreDisplay.textContent = p1Score;
	gameOver = false;
	p1Btn.removeAttribute('disabled');

	p2Score = 0;
	p2ScoreDisplay.textContent = p2Score;
	p2Btn.removeAttribute('disabled');
	gameOver = false;

	p1ScoreDisplay.removeAttribute('class', 'text-success text-danger');
	p2ScoreDisplay.removeAttribute('class', 'text-success text-danger');
}

resetBtn.addEventListener('click', () => {
	// p1Score = 0;
	// p1ScoreDisplay.textContent = p1Score;
	// gameOver = false;
	// p1Btn.removeAttribute('disabled');

	// p2Score = 0;
	// p2ScoreDisplay.textContent = p2Score;
	// p2Btn.removeAttribute('disabled');
	// gameOver = false;
	reset();
	inputScore.textContent = inputScore.value = '';
	wScoreDisplay.textContent = inputScore.value;
});


