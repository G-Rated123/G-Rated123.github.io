//making my wheels into a variable
const wheels = document.querySelectorAll(".letter-wheels > div")

//making the variables for the buttons and letters
wheels.forEach((wheel) => {
    const letterOptions = wheel.dataset.options.split(",");
    const upButton = wheel.querySelector(".up-button");
    const downButton = wheel.querySelector(".down-button")
}