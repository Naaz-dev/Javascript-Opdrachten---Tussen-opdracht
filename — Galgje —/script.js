let gekozenWoord = "";
let geradenLetters = [];
let levens = 10;



const startKnop = document.getElementById("startKnop");
const streepjesElement = document.getElementById("streepjes");
const levensElement = document.getElementById("levens");
const feedbackElement = document.getElementById("feedback");
const raadKnop = document.getElementById("raadKnop");
const letterInput = document.getElementById("letterInput");


startKnop.addEventListener("click", () => {
    gekozenWoord = document.getElementById("woord").value.toLowerCase();

    geradenLetters = [];

    levens = 10;



    document.getElementById("woord").value = "";


    toonStreepjes();

    updateLevens();

    feedbackElement.textContent = "";

    raadKnop.disabled = false;
});


function toonStreepjes() {
    let streepjes = gekozenWoord
    .split("")
    .map(letter => (geradenLetters.includes(letter) ? letter : "_"))

    .join(" ")


    streepjesElement.textContent = streepjes;
}


function updateLevens() {
    levensElement.textContent = `levens: ${levens}`;
}


raadKnop.addEventListener("click", () => {
    const geradenletter = letterInput.value.toLowerCase();

    letterInput.value = "";




    if (geradenLetters.includes(geradenletter)) {
        feedbackElement.textContent = "Deze letter heb je al geraden!";

        return;
    }



    geradenLetters.push(geradenletter);


    if(gekozenWoord.includes(geradenletter)) {
        feedbackElement.textContent = "Goed geraden!";
    }else{
        feedbackElement.textContent = "Fout geraden!"

        levens--;

        if(levens <= 0) {
            feedbackElement.textContent = `Je hebt verloren! Het woord was: ${gekozenwoord}`;
            

        raadKnop.disabled = true;

        return;

    }
    }
    toonStreepjes();

    updateLevens();


    if (!streepjesElement.textContent.includes("_")) {
        feedbackElement.textContent = "Gefeliciteerd, je hebt gewonnen!";
        
        raadKnop.disabled = true; 
    
    }
});

