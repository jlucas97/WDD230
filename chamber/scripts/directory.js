
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

        const businessImg = document.createElement("img");
        businessImg.setAttribute("src", company.image);
        businessImg.setAttribute("width", "200");
        businessImg.setAttribute("alt", `${company.name} picture`);
        section.appendChild(businessImg);

        const phone = document.createElement("p");
        phone.innerHTML = company.phone;
        section.appendChild(phone);

        const companyLink = document.createElement("a");
        companyLink.setAttribute("href", company.website);
        companyLink.innerHTML = "Visit our webpage";
        section.appendChild(companyLink);

        const description = document.createElement("p");
        description.innerHTML = `Description: ${company.other_information}`;
        section.appendChild(description);

        container.appendChild(section);
    });


}


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

listButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("companies");
});

gridButton.addEventListener("click", () => {
    container.classList.add("companies");
    container.classList.remove("list");
})


getCompanies();