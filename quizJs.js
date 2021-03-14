let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC;
let startButton = document.getElementById("startButton");
let timeEl = document.getElementById("timer");
let timeLeft = 120;
let yourName = document.getElementById("name");
let highScore = document.getElementById("highScore");
let savedScore = document.getElementsByClassName("savedScore");
let submitButton = document.getElementById("submitButton");


// const userInput = JSON.parse(localStorage.getItem("userInput"));

// saveUserInput = e => {
//     e.preventDefault();

//     const score = {
//         myName: yourName.value,
//         score: highScore.value
//     };
//     userInput.push(myName)
//     userInput.push(score)
//     submitButton.addEventListener("click", console.log(userInput))
// }


//allows for text boxes to be hidden until called
function scoreBoard() {
    $(".savedScore").hide()
}
function score2() {
    $(".savedScore").show()
}

function countdown() {
    let timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
            get("quiz").innerHTML = "Quiz completed";
            pos = 0;
            correct = 0;
            score2();
            return false;
        }
    }, 1000);
}


let questions = [
    {
        question: "What does !== mean?",
        a: "equal",
        b: "not equal",
        c: "true",

        correctAnswer: "B"
    },
    {
        question: "What symbols are needed in an if statement?",

        a: "() {}",
        b: "<> ()",
        c: "^ &&",

        correctAnswer: "A"
    },
    {
        question: "Which file name is a JavaScript file?",

        a: "file.css",
        b: "file.md",
        c: "file.js",

        correctAnswer: "C"
    },
    {
        question: "What is the purpose of the else in an if else statement?",

        a: "Tells the system what to do if the if statement is false",
        b: "Makes the system ignore the if statement no matter what",
        c: "Confuses the computer and makes it not work",

        correctAnswer: "A"
    },
    {
        question: "What does Math.random do?",

        a: "Is a stand alone statement that gives you random numbers",
        b: "Is not a stand alone statment but gives you random numbers without any parameters",
        c: "Is part of a function that (along with other parts of a formula) can give you a random variable within set parameters",

        correctAnswer: "C"
    },
    {
        question: "What is a boolean?",

        a: "Represents either true or false",
        b: "Is identified by being surrounded by double qoutes",
        c: "Is a number",

        correctAnswer: "A"
    },
    {
        question: "How can you identify an array?",

        a: "curly brackets {}",
        b: "double quotes",
        c: "square brackets []",

        correctAnswer: "C"
    },
    {
        question: "What do loops do?",

        a: "Make a pretty picture",
        b: "Allow a block of code to run multiple times",
        c: "Run in circles",

        correctAnswer: "B"
    },
    {
        question: "What is the concern with global variables?",

        a: "There are no concerns with global variables",
        b: "They can overwrite other functions",
        c: "They will try and take over the world",

        correctAnswer: "B"
    },
    {
        question: "How to you make your site do something on a specific command?",

        a: "Yell at it",
        b: ".addEventListener()",
        c: "Have a calm conversation",

        correctAnswer: "B"
    },
    {
        question: "How do you store and retrieve data in the browser?",

        a: "localStorage.setItem() and localStorage.getItem()",
        b: "Hope for the best",
        c: ".addEventListener()",

        correctAnswer: "A"
    }
];

function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("quiz").innerHTML = "Quiz Completed";
        pos = 0;
        correct = 0;
        score2();
        return false;
    }


    get("quiz").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;

    test.innerHTML = "<h3>" + question + "</h3>";

    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer() {

    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if (choice === questions[pos].correctAnswer) {
        //each time there is a correct answer this value increases
        correct++;
    }
    if (choice !== questions[pos].correctAnswer && timeLeft >= 0) {
        timeLeft -= 10
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}


startButton.addEventListener("click", renderQuestion)
startButton.addEventListener("click", countdown)
window.addEventListener("load", scoreBoard)