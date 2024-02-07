let img = document.querySelector("img");
let input = document.querySelector(".input");

let userInput = prompt("I LOVE YOU\n DO YOU LOVE ME ?");
while (userInput === null || userInput.trim() === "") {
    userInput = prompt("I LOVE YOU,\n DO YOU LOVE ME ?");
}

// Responds to user input with appropriate text content
switch (userInput) {
    case "NO":
    case "no":
    case "No":
        input.textContent = "Tato valo lagbena🫥";
        break;
    case "YES":
    case "yes":
    case "Yes":
        input.textContent = "I love you too";
        break;
    case "MAYBE":
    case "maybe":
    case "Maybe":
        input.textContent = "Let's see what happens";
        break;

    // Add more cases as needed
    default:
        input.textContent = "I don't understand:(";
        break;
}
