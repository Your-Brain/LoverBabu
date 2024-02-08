let img = document.querySelector("img");
let input = document.querySelector(".input");

let userInput = prompt("I LOVE YOU\n DO YOU LOVE ME ?");
while (userInput === null || userInput.trim() === "") {
    userInput = prompt("I LOVE YOU,\n DO YOU LOVE ME ?");
}
userInput = userInput.toUpperCase();

if (
    userInput.includes("YES") ||
    userInput.includes("HMM") ||
    userInput.includes("I DO") ||
    userInput.includes("I LOVE YOU") ||
    userInput.includes("I DO")
) {
    input.textContent = "I love you too";
}
 else if (
    userInput.includes("NO") ||
    userInput.includes("NOT") ||
    userInput.includes("NA")
) {
    img.style.display = "none";
    input.textContent = "ok:)";
    input.style.color = "#ff0070";
    input.style.fontSize = "50px";
}
 else if (
    userInput.startsWith("BA") ||
    userInput.startsWith("BAN") ||
    userInput.startsWith("GAN") ||
    userInput.startsWith("MAG") ||
    userInput.startsWith("KHA")||
    userInput.startsWith("LOL")
) {
    img.style.display = "none";
    input.textContent = "AUNTY JANTI HAI:(";
    input.style.color = "#811077";
    input.style.fontSize = "50px";
} 
else {
    input.textContent = "STILL I LOVE YOU :)";
}
