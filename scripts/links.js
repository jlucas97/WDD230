
const baseURL = "https://https://jlucas97.github.io/wdd230/";
const linksURL = "https://https://jlucas97.github.io/wdd230/data/links.json";

async function fetchLinks() {
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



