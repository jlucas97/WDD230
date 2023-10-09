
const visits = document.getElementById("visits");
let counter = localStorage.getItem("counter");

if (counter === null) {
    counter = 0;
}

counter++;

localStorage.setItem("counter", counter);

visits.textContent = `The Number of Visits is: ${counter} `