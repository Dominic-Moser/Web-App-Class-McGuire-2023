function answerForm()
{
    let randNum = Math.floor(Math.random()*5) + 1;

    let userCorrect = new Boolean(false);

    let userGuess = 0;

    let correctOrNot = "Incorrect";

    userGuess = document.getElementById("input").value;

    if(userGuess < randNum)
    {
        correctOrNot = "higher";
    }
    else if(userGuess > randNum)
    {
        correctOrNot = "lower";
    }

    document.getElementById("Answer").innerHTML = "Your guess was " + userGuess + " | The correct input was '"+ randNum + "' | You must go " + correctOrNot;


}