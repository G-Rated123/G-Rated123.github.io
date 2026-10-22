//making my wheels into a variable
const wheels = document.querySelectorAll(".letter-wheels > div")

//making the variables for the buttons and letters
wheels.forEach((wheel) => {
    const letterOptions = wheel.dataset.letters.split(",");
    const letterShowing = wheel.querySelector("h1");
    const upButton = wheel.querySelector(".up-button");
    const downButton = wheel.querySelector(".down-button");

    let currentLetter = letterOptions.indexOf(letterShowing.textContent);

    //make sure that what ever the starting thing is actually exists
    if (currentLetter === -1) {
        currentLetter = 0;
        letterShowing.textContent = letterOptions[currentLetter];
    }

    //making the up buttons function
    const goBackward = () => {
        if (currentLetter > 0) {
            currentLetter--;
        } else {
            currentLetter = letterOptions.length - 1;
        }

        letterShowing.textContent = letterOptions[currentLetter];
    };

    //making the down buttons function
    const goForward = () => {
        if (currentLetter < letterOptions.length - 1) {
            currentLetter++;
        } else {
            currentLetter = 0;
        }

        letterShowing.textContent = letterOptions[currentLetter];
    };

    //assigning the up and down functions to the buttons
    upButton.addEventListener("click", goBackward);
    downButton.addEventListener("click", goForward)
});

//making a variable for the check button thing
const check = document.querySelector("#check");
const rightWrong = document.querySelector("#rightWrong");
const image = document.querySelector("#image");

//putting the words and emojis into actual questions/hints
const hints = [
    { word: "ball", hint: "⚽"},
    { word: "sun", hint: "☀️"},
    { word: "hat", hint: "👒"},
    { word: "pig", hint: "🐷"},
    { word: "bat", hint: "🦇"},
    { word: "pear", hint: "🍐"},
    { word: "cut", hint: "💇🏼‍♀️"},
    { word: "fan", hint: "🪭"},
    { word: "boot", hint: "👢"},
    { word: "pan", hint: "🍳"},
    { word: "cat", hint: "😺"},
    { word: "moon", hint: "🌕"},
    { word: "pin", hint: "📌"}
];

let currentHint = 0;

image.textContent = hints[currentHint].hint;

check.addEventListener("click", () => {
    let answer = "";

    wheels.forEach((wheel) => {
        answer += wheel.querySelector("h1").textContent;
    });

    const rightAnswer = hints[currentHint].word;

    if (answer === rightAnswer) {
        rightWrong.textContent = "Correct!";

        currentHint++;

        if (currentHint >= hints.length) {
            popup.style.display = "block";
            currentHint = 0;
    } 
    
    image.textContent = hints[currentHint].hint;
    } else {
        rightWrong.textContent = "Not quite, the correct spelling was " + rightAnswer;
    }
    
});

const popup = document.querySelector("#endPopup");
const closePopup = document.querySelector("#close");

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
