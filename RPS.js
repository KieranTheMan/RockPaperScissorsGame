let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let scoreBoard = document.querySelector('.score-board');
let result = document.querySelector('.result > p');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');

init();

function init() {
    getCompChoice();
    clickEvents();
}

function convertToWord(letter) {
    return letter === 'r' ? 'Rock' :
        letter === 'p' ? 
            'Paper' : 
            'Scissors';
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore.innerHTML = compScore;
    result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)} You Win!`;
    choice().classList.add('green-glow');
    setTimeout(() => userChoice_dev.classList.remove('green-glow'), 500);
}

function lose(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    compScore.innerHTML = compScore;
    result.innerHTML = `${convertToWord(compChoice)} beats ${convertToWord(userChoice)} You Lose!`;
    choice().classList.add('red-glow');
    setTimeout(()=>userChoice_dev.classList.remove('red-glow'), 500);
}

function draw(userChoice) {
    userScore_span.innerHTML = userScore;
    compScore.innerHTML = compScore;
    result.innerHTML = 'DRAW!';
    choice().classList.add('gray-glow');
    setTimeout(()=>userChoice_dev.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    let compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, compChoice);
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, compChoice);
            break;
    }
}

function getCompChoice() {
    let choices = ['r', 'p', 's'];
    let randomNums = Math.floor(Math.random() * 3);
    return choices[randomNums];
}

function clickEvents() {
    rock.addEventListener('click', () => game('r'));
    paper.addEventListener('click', () => game('p'));
    scissors.addEventListener('click', () =>game('s'));
}

function choice() {
    userChoice_dev = document.getElementById(userChoice);
}