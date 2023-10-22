
const baseURL = "https://jlucas97.github.io/wdd230/";
const linksURL = "https://jlucas97.github.io/wdd230/data/links.json";
const ulLinks = document.getElementById("links");



async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayLinks = (data) => {
    const weeks = data.weeks;
    weeks.forEach((week) => {
        const liLinks = document.createElement("li");
        liLinks.innerHTML = week.week + ": ";
        ulLinks.appendChild(liLinks);
        var i = 0;
        week.links.forEach((url) => {
            const homeworks = document.createElement("a");
            if (i === week.links.length - 1) {
                homeworks.innerHTML = `${url.title} `;
            } else {
                homeworks.innerHTML = `${url.title} |`;
            }
            i++;
            homeworks.setAttribute("href", url.url);
            homeworks.setAttribute("target", "_blank");

            liLinks.appendChild(homeworks);
        });
    });
}

getLinks();