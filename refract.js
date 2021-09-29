class Books {
    books = [];
    console.log(test);
    constructor(title, author) {
        this.title = title;
        this.author = author;
        // this.bookLList = localStorage.setItem('books', JSON.stringify(books));

    }
    // const bookList = document.getElementById('booklist');

    addBook(books) {
    this.books.push(books);
      
    }

    removeBook(books) {
        this.books.splice(index, 1);
        books.splice(index, 1);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    localStorage.setItem('books', JSON.stringify(books));
  }
  if (index.classList.contains('remove')) {
    const removeItem = index.parentElement;
    removeItem.remove();
  }
    }

    dataStorage(books) {
        const Wrapper = document.createElement('div');
  const titleHeader = document.createElement('h2');
  const authorHeader = document.createElement('h2');
  const removebtn = document.createElement('button');
  titleHeader.innerText = title;
  authorHeader.innerText = author;

  removebtn.textContent = 'Remove';
  removebtn.classList.add('remove');

  Wrapper.append(titleHeader, authorHeader, removebtn);
  bookList.appendChild(Wrapper);
  removebtn.addEventListener('click', (e) => {
    const removeItem = e.target;
    removeBook(removeItem);
  });
    }

//     book.forEach(datastorage);

// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (title.validity.valueMissing && author.validity.valueMissing) {
//     title.setCustomValidity('Please enter book title');
//     author.setCustomValidity('Please enter book Author');
//   } else {
//     const newBook = addBook(
//       title.value,
//       author.value,
//     );

//     datastorage(newBook);
//     title.value = '';
//     author.value = '';
//     title.focus();
//   }
// })
}


