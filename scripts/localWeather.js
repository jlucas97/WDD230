
const currentTemp = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const condition = document.getElementById('condition');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=9.97&lon=-84.2&units=metric&appid=3c0438352314bba7fae97ccf68bf51b5';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = data.main.temp + " C° degrees";
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Weather ${desc}`);
    currentTemp.style.setProperty('--background-image', iconsrc);
    condition.innerText = `(${desc})`;
}

apiFetch();