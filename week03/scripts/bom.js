
const chapterInput = document.getElementById("favchap");
const button = document.querySelector("button");
const books = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", () => {
    if (chapterInput.value === "" || chapterInput.value === null) {
        chapterInput.focus();
        alert("Please enter a book and chapter");
    } else {
        displayList(chapterInput.value);
        chaptersArray.push(chapterInput.value);
        setChapterList();
        chapterInput.value = "";
        chapterInput.focus();
    }
});

function displayList(item) {
    const book = document.createElement("li");
    const deleteButton = document.createElement("button");

    book.innerHTML = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    book.append(deleteButton);
    books.append(book);

    deleteButton.addEventListener("click", () => {
        books.removeChild(book);
        deleteChapter(book.textContent);
        chapterInput.focus();
    })
}

function setChapterList() {
    localStorage.setItem("bookOfMormonChapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("bookOfMormonChapters"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



