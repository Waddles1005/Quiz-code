// varibles
let startButton = $('#init')
let rules = $('#rules')
let timerCont = $('#timerContainer')
let timeLimit = 80;
let quizMain = $('#quizMain')
let listEl = $('#answerList')
let aOne = $('#answer1')
let aTwo = $('#answer2')
let aThree = $('#answer3')
let aFour = $('#answer4')
let aFive = $('#answer5')
let scores = ('#Highscores')
let finalScore = 0;

//quetions 
const quizQuestions = [
    {
        question: 'Commonly used data types DO Not Include:',
        choices: ['stings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed with _______.',
        choices: ['quotes', 'curly braces', 'parenthesis', 'square brackets'],
        correctAnswer: 'parenthesis'
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correctAnswer: 'all of the above'
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables',
        choices: ['commas', 'cruly', 'quotes', 'parenthesis'],
        correctAnswer: 'quotes'
    },
    {
        question: 'A very usefull tool used during development and debegging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
        correctAnswer: 'console log'
    },
]

let questoinsIndex = 0;

function timer() {
    displayQuestions();
    let timerInterval = setInterval(function () {
        timerLimit--;
        timerCountdown.textContent = 'Timer: ' + timeLimit
        if (timeLimit === 0 || questoinsIndex >= 5) {
            clearInterval(timerInterval);
            highScores();
            return;
        }
    }, 1000)
}

function displayQuestions() {
    startButton.style.display = 'none';
    listEl.style.display = 'block';
    let questionOutput = quizQuestions[questoinsIndex].question;
    let questionChoices = quizQuestions[questoinsIndex].choices;
    answerChoices = [aOne, aTwo, aThree, aFour, aFive];
    aOne.textContent = (quizQuestions[questoinsIndex].choices[0])
    aTwo.textContent = (quizQuestions[questoinsIndex].choices[1])
    aThree.textContent = (quizQuestions[questoinsIndex].choices[2])
    aFour.textContent = (quizQuestions[questoinsIndex].choices[3])
    aFive.textContent = (quizQuestions[questoinsIndex].choices[4])

    let answerClick = $('li')
    for (i = 0; i < answerClick.length; i++) {
        answerClick[i].onClick(checkAnswers);

    }
    if (questoinsIndex >= 5) {
        return;
    };
}
//checking answers
function checkAnswers() {
    Event, prevent.Default()
    let rightAnswer = Event.target.textContent;
    let answerMessage = $('p');
    $(answerMessage).append(listEl);
    {
        if (rightAnswer === quizQuestions[questoinsIndex].correctAnswer) {
            answerMessage.textContent = 'Correct';
        }

     else {
        answerMessage.textContent = 'Incorrect';
        timeLimit = timeLimit - 10;
    }

}
if (questoinsIndex >= 5){
    return;
} else {
    questoinsIndex++;
    displayQuestions();
}
}