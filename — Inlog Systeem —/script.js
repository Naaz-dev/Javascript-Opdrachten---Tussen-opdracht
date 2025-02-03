
let users = ["admin"];
let passwords = ["1234"];

const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");

// Formulierafhandeling
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Voorkomt het standaard submit-gedrag

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Vul alle velden in!";
        return;
    }

    const userIndex = users.indexOf(username);
    if (userIndex !== -1 && passwords[userIndex] === password) {
        message.style.color = "green";
        message.textContent = "Succesvol ingelogd!";
    } else {
        message.style.color = "red";
        message.textContent = "Ongeldige gebruikersnaam of wachtwoord!";
    }
});

// Register-knop afhandeling
registerBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Controleer of de invoer leeg is
    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Vul alle velden in!";
        return;
    }

    // Controleer of de gebruiker al bestaat
    if (users.includes(username)) {
        message.style.color = "red";
        message.textContent = "Gebruikersnaam bestaat al!";
    } else {
        // Voeg nieuwe gebruiker toe
        users.push(username);
        passwords.push(password);
        message.style.color = "green";
        message.textContent = "Succesvol geregistreerd!";
    }
});
