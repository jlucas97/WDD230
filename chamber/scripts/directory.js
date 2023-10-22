
const container = document.querySelector(".companies");
const url = "https://jlucas97.github.io/wdd230/chamber/data/members.json";

async function getCompanies() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCompanies(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayCompanies = (data) => {
    const companies = data.companies;
    companies.forEach((company) => {
        const section = document.createElement("section");
        const name = document.createElement("h2");
        name.innerHTML = company.name;
        section.appendChild(name);

        const location = document.createElement("h3");
        location.innerHTML = `Location: ${company.address}`;
        section.appendChild(location);


        container.appendChild(section);
    });


}


getCompanies();