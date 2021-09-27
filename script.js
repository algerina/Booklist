const title = document.querySelector('#inputTitle');
const author = document.querySelector('#inputAuthor'); // eslint-disable-line no-undef
const bookList = document.querySelector('#bookList');// eslint-disable-line no-unused-vars
const add = document.querySelector('#add');
let books = JSON.parse(localStorage.getItem('books')) || [];

function addBook(title, author) {
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  return { title, author };
}

function removeBook(element) {
  if (element.classList.contains('remove')) {
    const removeItem = element.parentElement;
    books = books.filter((book) => {
      book.title !== element
    });
    removeItem.remove();
    localStorage.setItem('books', JSON.stringify(books));
  }
}
function datastorage({ title, author }) {
  const wrapper = document.createElement('div');
  const titleHeader = document.createElement('h2');
  const authorHeader = document.createElement('h2');
  const removebtn = document.createElement('button');
  titleHeader.innerText = title;
  authorHeader.innerText = author;

  removebtn.textContent = 'Remove';
  removebtn.classList.add('remove');

  wrapper.append(titleHeader, authorHeader, removebtn);
  bookList.appendChild(wrapper);
  removebtn.addEventListener('click', (e) => {
    const removeItem = e.target;
    removeBook(removeItem);
  });
}

books.forEach(datastorage);

add.addEventListener('click', (e) => {
  e.preventDefault();

  if (title.validity.valueMissing && author.validity.valueMissing) {
    title.setCustomValidity('Please enter book title');
    author.setCustomValidity('Please enter book Author');
  } else {
    const newBook = addBook(
      title.value,
      author.value,
    );

    datastorage(newBook);
    title.value = '';
    author.value = '';
    title.focus();
  }
});
