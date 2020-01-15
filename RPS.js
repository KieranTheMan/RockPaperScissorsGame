let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let scoreBoard = document.querySelector('.score-board');
let result = document.querySelector('.result');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');

function getCompChoice() {
    let choices = ['r', 'p', 's'];
    let randomNums = Math.floor(Math.random() * 3);
    return choices[randomNums];
}

function win() {
    console.log('User Wins')
}

function lose() {
    console.log('User Lose')
}

function draw() {
    console.log('Draw')
}



function game(userChoice) {
    let compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win();
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose();
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw();
            break;

    }
}

rock.addEventListener('click', function() {
game('r');
});

paper.addEventListener('click', function() {
game('p');
});

scissors.addEventListener('click', function() {
game('s');
});