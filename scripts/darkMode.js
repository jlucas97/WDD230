const mode = document.getElementById("light-mode");
const lightImage = document.getElementById("lightbulb");
const mainBody = document.querySelector("body");
const cards = document.querySelectorAll("a");

let lightbulb = false;

mode.addEventListener("click", () => {
    if (lightbulb === false) {
        mainBody.style.background = "#fff";
        mainBody.style.color = "#000";
        cards.forEach((card) => {
            card.style.color = "#000";
        })

        lightImage.src = "images/light.png";

        lightbulb = true;
    } else {
        mainBody.style.background = "#0471a6";
        mainBody.style.color = "#fff";
        cards.forEach((card) => {
            card.style.color = "#fff";
        })

        lightImage.src = "images/idea.webp";
        lightbulb = false;
    }
});
