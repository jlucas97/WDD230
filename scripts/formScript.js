document.addEventListener("DOMContentLoaded", function () {
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("uRating");

    range.addEventListener("change", displayRatingValue);
    range.addEventListener("input", displayRatingValue);

    function displayRatingValue() {
        rangevalue.innerHTML = range.value;
    }

    const password = document.getElementById("passWord");
    const repeat = document.getElementById("rPassWord");
    const button = document.getElementById("submitBtn");

    function matchPassword(event) {
        console.log(password.value, repeat.value);
        if (password.value !== repeat.value) {
            alert("Passwords do not match. Please try again.");
            password.value = "";
            repeat.value = "";
            password.focus();
            event.preventDefault();
        }
    }

    button.addEventListener("click", matchPassword);
});