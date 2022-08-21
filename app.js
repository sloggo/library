let myLibrary = [];

const $addBook = document.querySelector('#addBook');

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,

    this.addBookToLibrary = function(){
        myLibrary.push(this);
    }
}


function createBookContainer(book) {
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
}

$addBook.addEventListener('click', () =>{
    let $formObj = document.querySelector('form')
    let $bookTitleInput = document.querySelector('input[name="title"]');
    let $bookAuthorInput = document.querySelector('input[name="author"]');
    let $bookPagesInput = document.querySelector('input[name="pages"]');
    let $bookReadInput = document.querySelector('input[name="read"]');

    if($bookTitleInput.value && $bookAuthorInput.value && $bookPagesInput.value && $bookReadInput.value){
        let newBook = new Book($bookTitleInput.value, $bookAuthorInput.value, $bookPagesInput.value, $bookReadInput.value)
        newBook.addBookToLibrary()
        createBookContainer(newBook)
    }

    $formObj.reset()
})

let test = new Book('Lord of The Rings','Tolkien',3534,true).addBookToLibrary()

myLibrary.forEach(createBookContainer)

