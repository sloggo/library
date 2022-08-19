let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook)
}

addBookToLibrary('Lord of The Rings','Tolkien',3534,true)

myLibrary.forEach(book => {
    let $bookShelf = document.querySelector('.bookShelf')

    let $bookContainer = document.createElement('div')
    $bookContainer.classList.add('bookContainer')

    let $bookTitle = document.createElement('h1')
    $bookTitle.classList.add('title')
    $bookTitle.textContent = book.title
    $bookContainer.appendChild($bookTitle)

    let $bookAuthor = document.createElement('p')
    $bookAuthor.classList.add('author')
    $bookAuthor.textContent = book.author
    $bookContainer.appendChild($bookAuthor)

    let $bookPages = document.createElement('p')
    $bookPages.classList.add('pages')
    $bookPages.textContent = book.pages
    $bookContainer.appendChild($bookPages)

    $bookShelf.appendChild($bookContainer)
})