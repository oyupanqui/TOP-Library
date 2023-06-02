const formDiv = document.getElementById("formDiv")
const form = document.getElementById("form")
const library = document.getElementById("library")

// Animations

function openForm(){
    formDiv.classList.add("active")
    formDiv.classList.remove("inactive")
}

function closeForm(){
    formDiv.classList.add("deactivating")
    formDiv.classList.remove("active")

    setTimeout(()=>{
        formDiv.classList.add("inactive")
        formDiv.classList.remove("deactivating")
        form.reset()
    }, 1000)
}

// Library and Book definition

let myLibrary = []

function Book(title, author, pages, genre, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

// Some pre-made books

const CoC = new Book("The Call of Cthulhu", "H.P. Lovecraft", 35, "Horror", "Yes")
myLibrary.push(CoC)

const Sil = new Book("The Silmarillion", "J.R.R. Tolkien", 480, "Fantasy", "No")
myLibrary.push(Sil)

const It = new Book("It", "Stephen King", 1138, "Horror", "No")
myLibrary.push(It)

const Drac = new Book("Dracula", "Bram Stoker", 418, "Horror", "Yes")
myLibrary.push(Drac)

// Function to add books to the array

function addBookToLibrary(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add("book")
    bookCard.innerHTML = `
        <div class="title">Title: ${book.title}</div>
        <div class="author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <div class="author">Author: ${book.genre}</div>
        <div class="read">Read: ${book.read}</div>
        <img src="img/delete.svg" height="25px" width="25px" class="trash">`
    library.appendChild(bookCard);
}

// Initial loop to add pre-made books

myLibrary.forEach(book=>{
    addBookToLibrary(book)
})

// Button functionality to add form data to the library

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formTitle = document.getElementById("form-title").value
    const formAuthor = document.getElementById("form-author").value
    const formPages = document.getElementById("form-pages").value
    let formRead
    if (document.getElementById("form-read").checked == true) {
        formRead = "Yes"
    } else {formRead = "No"}
    const formGenre = document.getElementById("form-genre").value
    closeForm()
    const newBook = new Book(formTitle, formAuthor, formPages, formGenre, formRead)
    myLibrary.push(newBook)
    addBookToLibrary(newBook)
})

const trashCol = document.getElementsByClassName("trash")

Array.from(trashCol).forEach((button) => {
    button.addEventListener("click", ()=> {
        let bookTitle = button.parentNode.children[0].textContent.slice(7)
        for (let i = 0; i < myLibrary.length; i++) {
            let obj = myLibrary[i]

            if (bookTitle.indexOf(obj.title) !== -1) {
                myLibrary.splice(i, 1);
                i--;
            }
        }
        button.parentNode.remove()
    })
})

