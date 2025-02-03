const randomNumber = Math.floor(Math.random() *11);

let attempts = 0;

function checkGuess() {
    const userInput = document.getElementById("guess").value ;

    const message = document.getElementById("message");

    if (userInput === "" || isNaN(userInput)) {
        message.textContent = "Vul een geldig getal in!";
        return;
    }

    const guess = Number(userInput);

    if (guess < 0 || guess > 10) {
        message.textContent = "Vul een getal in tussen 0 en 10!";
        return;
    }
    
    attempts++;

    if(guess < randomNumber) {
        message.textContent = "Te laag! probeer opnieuw.";
    }else if (guess > randomNumber) {
    message.textContent = "Te hoog! probeer opnieuw.";
    }else {
        message.textContent = `Gefeliciteerd! Je hebt het juiste getal (${randomNumber}) geraden in ${attempts} pogingen.`;
        document.getElementById("restart").style.display = "block";
    }
}

function restartGame() {
    location.reload();
}