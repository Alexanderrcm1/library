const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let dialog = document.querySelector("#dialog");

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
    dialog.show();

})

function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").value
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);

    
  }

  let submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", function () {

    addBookToLibrary();

  })

