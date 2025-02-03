let wins = 0;   // Hoe vaak de speler heeft gewonnen
let losses = 0;    // Hoe vaak de speler heeft verloren
let draws = 0;     // Hoe vaak er gelijkspel was

const playerDice1 = document.getElementById("playerDice1");
const playerDice2 = document.getElementById("playerDice2");
const computerDice1 = document.getElementById("computerDice1");
const computerDice2 = document.getElementById("computerDice2");
const scoreboard = document.getElementById("scoreboard");
const rollButton = document.getElementById("rollButton");


// Functie om een dobbelsteen te gooien
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Functie om animatie toe te voegen aan dobbelstenen
// Deze laat de dobbelstenen snel veranderen voordat het resultaat verschijnt

function animateDice(callback) {
    let counter = 0;
    const interval = setInterval(() => {
        playerDice1.textContent = `🎲 ${rollDice()}`;
        playerDice2.textContent = `🎲 ${rollDice()}`;
        computerDice1.textContent = `🎲 ${rollDice()}`;
        computerDice2.textContent = `🎲 ${rollDice()}`;
        counter++;


        if (counter > 10) {
            clearInterval(interval);
            callback();
        }
    }, 100);
}



function playGame() {
    animateDice(() => {
        // Na de animatie, gooi de dobbelstenen
        const playerRoll1 = rollDice();
        const playerRoll2 = rollDice();
        const computerRoll1 = rollDice();
        const computerRoll2 = rollDice();


        // Update de dobbelstenen op de pagina met het resultaat
        playerDice1.textContent = `🎲 ${playerRoll1}`;
        playerDice2.textContent = `🎲 ${playerRoll2}`;
        computerDice1.textContent = `🎲 ${computerRoll1}`;
        computerDice2.textContent = `🎲 ${computerRoll2}`;


        //Bereken de score
        const playerScore = playerRoll1 + playerRoll2;
        const computerScore = computerRoll1 + computerRoll2;



        if (playerScore > computerScore) {
            wins++;
            alert("Je wint! 🎉");
        } else if (playerScore < computerScore) {
            losses++;
            alert("Je verliest! 😢");
        } else {
            draws++;
            alert("Gelijkspel!  🤝");
        }
        // Update het scoreboard
        scoreboard.textContent = `Winst: ${wins} | Verlies: ${losses} | Gelijkspel: ${draws}`;
    });
}

rollButton.addEventListener("click", playGame);