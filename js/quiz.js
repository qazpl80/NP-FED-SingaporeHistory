//// JavaScript source code
//(function () {
//    function buildQuiz() {
//        // variable to store the HTML output
//        const output = [];

//        // for each question...
//        myQuestions.forEach(
//            (currentQuestion, questionNumber) => {

//                // variable to store the list of possible answers
//                const answers = [];

//                // and for each available answer...
//                for (letter in currentQuestion.answers) {

//                    // ...add an HTML radio button
//                    answers.push(
//                        `<label>
//              <input type="radio" name="question${questionNumber}" value="${letter}">
//              ${letter} :
//              ${currentQuestion.answers[letter]}
//            </label>`
//                    );
//                }

//                // add this question and its answers to the output
//                output.push(
//                    `<div class="question"> ${currentQuestion.question} </div>
//          <div class="answers"> ${answers.join('')} </div>`
//                );
//            }
//        );

//        // finally combine our output list into one string of HTML and put it on the page
//        quizContainer.innerHTML = output.join('');
//    }

//    function showResults() {

//        // gather answer containers from our quiz
//        const answerContainers = quizContainer.querySelectorAll('.answers');

//        // keep track of user's answers
//        let numCorrect = 0;

//        // for each question...
//        myQuestions.forEach((currentQuestion, questionNumber) => {

//            // find selected answer
//            const answerContainer = answerContainers[questionNumber];
//            const selector = `input[name=question${questionNumber}]:checked`;
//            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//            // if answer is correct
//            if (userAnswer === currentQuestion.correctAnswer) {
//                // add to the number of correct answers
//                numCorrect++;

//                // color the answers green
//                answerContainers[questionNumber].style.color = 'lightgreen';
//            }
//            // if answer is wrong or blank
//            else {
//                // color the answers red
//                answerContainers[questionNumber].style.color = 'red';
//            }
//        });

//        // show number of correct answers out of total
//        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//    }

//    const quizContainer = document.getElementById('quiz');
//    const resultsContainer = document.getElementById('results');
//    const submitButton = document.getElementById('submit');
//    const myQuestions = [
//        {
//            question: "Who invented JavaScript?",
//            answers: {
//                a: "Douglas Crockford",
//                b: "Sheryl Sandberg",
//                c: "Brendan Eich"
//            },
//            correctAnswer: "c"
//        },
//        {
//            question: "Which one of these is a JavaScript package manager?",
//            answers: {
//                a: "Node.js",
//                b: "TypeScript",
//                c: "npm"
//            },
//            correctAnswer: "c"
//        },
//        {
//            question: "Which tool can you use to ensure code quality?",
//            answers: {
//                a: "Angular",
//                b: "jQuery",
//                c: "RequireJS",
//                d: "ESLint"
//            },
//            correctAnswer: "d"
//        }
//    ];

//    // Kick things off
//    buildQuiz();

//    // Event listeners
//    submitButton.addEventListener('click', showResults);
//})();


function CalculateScore() {
    var score = 0
    var q1answer = document.getElementsByName("optionQ1");
    if (q1answer[2].checked) {
        score = score + 1;
    }
    var q2answer = document.getElementsByName("optionQ2");
    if (q2answer[0].checked) {
        score = score + 1
    }
    var q3answer = document.getElementsByName("optionQ3")
    if (q3answer[3].checked) {
        score = score + 1;
    }
    var q4answer = document.getElementsByName("optionQ4");
    if (q4answer[2].checked) {
        score = score + 1;
    }
    var q5answer = document.getElementsByName("optionQ5");
    if (q5answer[0].checked && q5answer[1].checked) {
        score = score + 1;
    }

    return score;
    
}


function submitquiz() {
    var score = CalculateScore();
    if (score == 0) {
        var divobj = document.getElementById("message");
        divobj.style.display = "block";
        divobj.innerHTML = "0/5"
        alert("You got " + score + " out of 5. Please reread the article and try again!");
    }
    else if (score == 1) {
        var divobj = document.getElementById("message");
        divobj.style.display = "block";
        divobj.innerHTML = "1/5"
        alert("You got " + score + " out of 5. You can do better!");
    }
    else if (score == 2) {
        var divobj = document.getElementById("message");
        divobj.style.display = "block";
        divobj.innerHTML = "2/5"
        alert("You got " + score + " out of 5. You can defiently do better by reading the article and finding the correct answers");
    }
    else if (score == 3) {
        var divobj = document.getElementById("message");
        divobj.style.display = "block";
        divobj.innerHTML = "3/5"
        alert("You got " + score + " out of 5. You passed but there is definetly room for improvement");
    }
    else if (score == 4) {
        var divobj = document.getElementById("message");
        divobj.style.display = "block";
        divobj.innerHTML = "4/5"
        alert("You got " + score + " out of 5. Almost there! Maybe one careless mistake");
    }
    else if (score == 5) {
        var divobj = document.getElementById("message");
        divobj.style.display = "block";
        divobj.innerHTML = "5/5"
        alert("You got " + score + " out of 5. congratulations you got everything correct, shows that you read the article well");
    }

   
}