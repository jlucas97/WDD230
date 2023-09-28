
const chapter = document.getElementById("favchap");
const button = document.querySelector("button");
const books = document.querySelector("#list");

button.addEventListener("click", () => {
    if (chapter.value === "" || chapter.value === null) {
        chapter.focus();
        alert("Please enter a book and chapter");
    } else {
        const book = document.createElement("li");
        const deleteButton = document.createElement("button");
        book.innerHTML = chapter.value;
        deleteButton.textContent = "❌";
        book.append(deleteButton);
        books.append(book);

        deleteButton.addEventListener("click", () => {
            books.removeChild(book);
        })

        chapter.focus();
        chapter.value = "";
    }
})