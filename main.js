const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    updatePage();
}

let dialog = document.querySelector("#dialog");

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
    dialog.show();

})

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);

    
  }

  let submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", function () {

    addBookToLibrary();
    updatePage();

  });

  function updatePage() {
    let libraryContainer = document.querySelector("#library-container");
    libraryContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "book-card");
        bookElement.innerHTML = `
        <div class="card-header">
            <h3 class="book-title">${book.title}</h3>
            <h5 class="book-author">by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p class="book-pages">${book.pages} pages</p>
            <p class="read-status"> ${book.read ? "Read" : "Not Read Yet"}</p>
        </div>
        <div class="card-buttons">
            <button class="remove-button" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-button" onclick="toggleRead(${i})">Read?</button>
        </div>
        `
        libraryContainer.appendChild(bookElement);
    }

  }

  function removeBook(index) {
    myLibrary.splice(index, 1)
    updatePage();
  }




