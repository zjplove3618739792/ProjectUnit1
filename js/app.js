const questions = [
    {
        question: "What is the capital of the United States?",
        options: ["New York City", "Washington, D.C", "Los Angeles", "Chicago"],
        answer: 1,
        explain: 'The correct answer is: Washington, D.C',
        image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900", 
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        answer: 2,
        explain: 'The correct answer is: George Washington',
        image: "https://www.whitehouse.gov/wp-content/uploads/2021/01/01_george_washington.jpg", 
    },
    {
        question: "Which U.S. state is the largest by area?",
        options: ["Texas", "California", "Alaska", "Montana"],
        answer: 2,
        explain: 'The correct answer is: Alaska',
        image: "https://static.independent.co.uk/2023/08/10/14/iStock-1318170875%20%281%29%20%281%29.jpg",
    },


];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', start);
    const returnButton = document.getElementById('return');
    returnButton.addEventListener('click', returnfunction);
    const tryAgainButton = document.getElementById('try-again-button');
    tryAgainButton.addEventListener('click', returnfunction);
});

start = () => {
    currentQuestion = 0;
    score = 0;  
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion();
}

returnfunction = () => {
    document.getElementById('landing-page').style.display = 'flex';
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('content-page').style.display = 'none';
    currentQuestion = 0;
    score = 0;  
};

showQuestion = () => {
    const questionElement = document.getElementById('question');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');

    questionElement.textContent = questions[currentQuestion].question;
    option1.textContent = questions[currentQuestion].options[0];
    option2.textContent = questions[currentQuestion].options[1];
    option3.textContent = questions[currentQuestion].options[2];
    option4.textContent = questions[currentQuestion].options[3];

    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
        option.onclick = () => checkAnswer();
    });
}

checkAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    showCustomContent(selectedOption);
}

showCustomContent = (selectedOption) => {
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('content-page').style.display = 'block';
    const contentElement = document.getElementById('custom-content');
    contentElement.textContent = `${questions[currentQuestion].explain}`;
    contentElement.style.fontSize = '40px';
    const questionImage = document.getElementById('question-image');
    if (questions[currentQuestion].image) {
        questionImage.src = questions[currentQuestion].image;
        questionImage.style.display = 'block';

    } else {
        questionImage.style.display = 'none';
    }
}

nextContent = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById('content-page').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
        showQuestion();
    } else {
        showResults();
    }
}

returnToQuiz = () => {
    document.getElementById('content-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
}

showResults = () => {
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('content-page').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('final-score').textContent = `You completed the game, your score is: ${score}`;
}
