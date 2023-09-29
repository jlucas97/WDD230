
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
let isOpen = false;

hamButton.addEventListener('click', () => {
    if (isOpen === false) {
        navigation.classList.toggle('open');
        navigation.style.display = "flex";
        hamButton.classList.toggle('open');
        isOpen = true;
    } else {
        navigation.style.display = "none";
        hamButton.classList = "";
        isOpen = false;
    }

});
