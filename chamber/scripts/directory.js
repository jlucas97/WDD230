
const container = document.querySelector(".companies");
const url = "https://jlucas97.github.io/wdd230/chamber/data/members.json";

async function getCompanies() {
    try {
        const response = await fetch(url);
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


getCompanies();