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

// Library

let myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const CoC = new Book("The Call of Cthulhu", "H.P. Lovecraft", 35, "Yes")
myLibrary.push(CoC)

const Sil = new Book("The Silmarillion", "J.R.R. Tolkien", 480, "No")
myLibrary.push(Sil)

const It = new Book("It", "Stephen King", 1138, "No")
myLibrary.push(Sil)

const Drac = new Book("Dracula", "Bram Stoker", 418, "Yes")
myLibrary.push(Sil)

function addBookToLibrary(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add("book")
    bookCard.innerHTML = `
        <div class="title">Title: ${book.title}</div>
        <div class="author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <div class="read">Read: ${book.read}</div>`
    library.appendChild(bookCard);
}

myLibrary.forEach(book=>{
    addBookToLibrary(book)
})


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formTitle = document.getElementById("form-title").value
    const formAuthor = document.getElementById("form-author").value
    const formPages = document.getElementById("form-pages").value
    let formRead
    if (document.getElementById("form-read").checked == true) {
        formRead = "Yes"
    } else {formRead = "No"}

    closeForm()
    const newBook = new Book(formTitle, formAuthor, formPages, formRead)
    myLibrary.push(newBook)
    addBookToLibrary(newBook)
})

