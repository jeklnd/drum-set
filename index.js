buttons = document.querySelectorAll("button.drum")

let kick = new Audio("sounds/kick-bass.mp3");
let tom1 = new Audio("sounds/tom1.mp3");
let tom2 = new Audio("sounds/tom2.mp3");
let snare = new Audio("sounds/snare.mp3");
let hat = new Audio("sounds/hat.mp3");
let tom4 = new Audio("sounds/tom4.mp3");
let crash = new Audio("sounds/crash.mp3");
sound = [kick, tom1, tom2, snare, hat, tom4, crash]

// Detecting mouse clicks
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", function () {
        playSound(this.innerHTML);
        addShadow(this.innerHTML);
    })
    buttons[i].addEventListener("mouseup", function () {
        removeShadow(this.innerHTML)
        pauseSound(this.innerHTML);
    })
}

// Detecting keyboard presses
document.addEventListener("keydown", function(event) {        
    playSound(event.key)
    addShadow(event.key)
})

document.addEventListener("keyup", function(event) {        
    removeShadow(event.key)
    pauseSound(event.key);
})


// Play and pause sound functionality
function playSound(key) {
    switch(key) {
        case "a":
            sound[0].play();
            break;
        case "s":
            sound[1].play();
            break;
        case "d":
            sound[2].play();
            break;
        case "f":
            sound[3].play();
            break;
        case "j":
            sound[4].play();
            break;
        case "k":
            sound[5].play();
            break;
        case "l":
            sound[6].play();
            break;
        default:
            break;
    }
}

function pauseSound(key) {
    switch(key) {
        case "a":
            sound[0].pause();
            sound[0].currentTime = 0;
            break;
        case "s":
            sound[1].pause();
            sound[1].currentTime = 0;
            break;
        case "d":
            sound[2].pause();
            sound[2].currentTime = 0;
            break;
        case "f":
            sound[3].pause();
            sound[3].currentTime = 0;
            break;
        case "j":
            sound[4].pause();
            sound[4].currentTime = 0;
            break;
        case "k":
            sound[5].pause();
            sound[5].currentTime = 0;
            break;
        case "l":
            sound[6].pause();
            sound[6].currentTime = 0;
            break;
        default:
            break;
    }
}

// Add and remove shadow functionality
function addShadow(key) {
    document.querySelector(`.${key}`).classList.add("pressed");
}

function removeShadow(key) {
    document.querySelector(`.${key}`).classList.remove("pressed");
}