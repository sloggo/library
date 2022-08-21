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


function createBookContainer(book, index) {
    let $bookShelf = document.querySelector('.bookShelf')

    let $bookContainer = document.createElement('div')
    $bookContainer.classList.add('bookContainer')
    $bookContainer.setAttribute('data-index', index)

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

    let $bookRead = document.createElement('input')
    $bookRead.type = 'checkbox'
    if(book.read === true){
        $bookRead.checked = true;
    } else{
        $bookRead.checked = false;
    }
    $bookContainer.appendChild($bookRead)

    $bookRead.addEventListener('change', (e) =>{
        const indexOfEvent = e.target.parentNode.getAttribute('data-index');
        if(myLibrary[indexOfEvent].read){
            myLibrary[indexOfEvent].read = false
        } else if(!(myLibrary[indexOfEvent].read)){
            myLibrary[indexOfEvent].read = true
        }

        console.log(myLibrary[indexOfEvent].read)

        $bookShelf.innerHTML = '';
        myLibrary.forEach((book, index) =>{
            createBookContainer(book, index);
        })
    })

    let $bookRemove = document.createElement('button')
    $bookRemove.classList.add('removeButton')
    $bookRemove.textContent = 'remove'
    $bookContainer.appendChild($bookRemove);

    $bookRemove.addEventListener('click', (e) =>{
        const indexToRemove = e.target.parentNode.getAttribute('data-index');
        console.log(indexToRemove)
        myLibrary.splice(indexToRemove,1);

        $bookShelf.innerHTML = '';
        myLibrary.forEach((book, index) =>{
            createBookContainer(book, index);
        })
    })

    $bookShelf.appendChild($bookContainer)
}

$addBook.addEventListener('click', () =>{
    let $formObj = document.querySelector('form')
    let $bookTitleInput = document.querySelector('input[name="title"]');
    let $bookAuthorInput = document.querySelector('input[name="author"]');
    let $bookPagesInput = document.querySelector('input[name="pages"]');
    let $bookReadInput = document.querySelector('input[name="read"]');

    if($bookTitleInput.value && $bookAuthorInput.value && $bookPagesInput.value){
        let newBook = new Book($bookTitleInput.value, $bookAuthorInput.value, $bookPagesInput.value, $bookReadInput.checked)
        let newIndex = myLibrary.length
        newBook.addBookToLibrary()
        createBookContainer(newBook, newIndex)
    }

    $formObj.reset()
})

let test = new Book('Lord of The Rings','Tolkien',3534,false).addBookToLibrary()

myLibrary.forEach((book, index) =>{
    createBookContainer(book, index);
})

