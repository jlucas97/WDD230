
const date = new Date();
let year = date.getFullYear();
let lastModified = document.lastModified;

document.getElementById("year").innerHTML = "@" + year;
document.getElementById("last-modified").innerHTML = "Last Modification " + lastModified;