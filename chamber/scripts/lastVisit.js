
function displayLastVisit() {
    const lastVisit = localStorage.getItem("lastVisit")

    if (lastVisit) {
        document.getElementById("last-visit").textContent = `Last visit: ${lastVisit}`;
    } else {
        document.getElementById("last-visit").textContent = `Welcome to our website!`;
    }
}

window.addEventListener("load", () => {
    displayLastVisit();

    const currentDate = new Date();
    const lastVisitRecorded = currentDate.toLocaleString();
    localStorage.setItem("lastVisit", lastVisitRecorded);
});

