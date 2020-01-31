//// JavaScript source code
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
        alert("You got " + score + " out of 5. Please reread the article and try again!");
    }
    else if (score == 1) {
       alert("You got " + score + " out of 5. You can do better!");
    }
    else if (score == 2) {
        alert("You got " + score + " out of 5. You can defiently do better by reading the article and finding the correct answers");
    }
    else if (score == 3) {
        alert("You got " + score + " out of 5. You passed but there is definetly room for improvement");
    }
    else if (score == 4) {
        alert("You got " + score + " out of 5. Almost there! Maybe one careless mistake");
    }
    else if (score == 5) {
        alert("You got " + score + " out of 5. congratulations you got everything correct, shows that you read the article well");
    }

   
}