const formDiv = document.getElementById("formDiv")
const form = document.getElementById("form")

let myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const libro = new Book('hola', 'os', 12, 'yes')

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

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})