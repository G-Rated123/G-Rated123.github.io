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

    const goBackward = () => {
        if (currentLetter > 0) {
            currentLetter--;
        } else {
            currentLetter = letterOptions.length - 1;
        }

        letterShowing.textContent = letterOptions[currentLetter];
    };

    const goForward = () => {
        if (currentLetter < letterOptions.length - 1) {
            currentLetter++;
        } else {
            currentLetter = 0;
        }

        letterShowing.textContent = letterOptions[currentLetter];
    };

    upButton.addEventListener("click", goBackward);
    downButton.addEventListener("click", goForward)
});