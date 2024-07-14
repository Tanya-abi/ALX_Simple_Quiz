function checkAnswer(){
    const correctAnswer = "4";

    let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
     

    let submit = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent ="That's incorrect. Try again!";
    }

}



document.getElementById('submit-answer').addEventListener('click', checkAnswer);



