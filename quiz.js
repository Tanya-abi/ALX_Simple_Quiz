function checkAnswer(){
    const correctAnswer = "4";

    let userAnswer = document.querySelector('input[name="quiz"]:checked');
     

    let submit = document.getElementById('feedback');

  if (userAnswer) {
    if(userAnswer.value === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent ="That's incorrect. Try again!";
    }
}else {
    feedback.textContent = "Please select an answer";
}

}



document.getElementById('submit-answer').addEventListener('click', checkAnswer);



