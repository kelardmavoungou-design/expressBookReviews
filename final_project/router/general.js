const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully" });
});

// Task 1 & 10 - Get all books (Async/Await)
public_users.get('/', async function (req, res) {
  try {
    const getBooks = () => new Promise((resolve) => resolve(books));
    const allBooks = await getBooks();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// Task 2 & 11 - Get book by ISBN (Promise)
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) resolve(book);
    else reject("Book not found");
  })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(404).json({ message: err }));
});

// Task 3 & 12 - Get books by Author (Async/Await)
public_users.get('/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    const getByAuthor = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.author === author);
      if (result.length > 0) resolve(result);
      else reject("No books found for this author");
    });
    const result = await getByAuthor();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 4 & 13 - Get books by Title (Async/Await)
public_users.get('/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    const getByTitle = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.title === title);
      if (result.length > 0) resolve(result);
      else reject("No books found with this title");
    });
    const result = await getByTitle();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 5 - Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book.reviews);
  }
  return res.status(404).json({ message: "Book not found" });
});

module.exports.general = public_users;const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully" });
});

// Task 1 & 10 - Get all books (Async/Await)
public_users.get('/', async function (req, res) {
  try {
    const getBooks = () => new Promise((resolve) => resolve(books));
    const allBooks = await getBooks();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// Task 2 & 11 - Get book by ISBN (Promise)
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) resolve(book);
    else reject("Book not found");
  })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(404).json({ message: err }));
});

// Task 3 & 12 - Get books by Author (Async/Await)
public_users.get('/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    const getByAuthor = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.author === author);
      if (result.length > 0) resolve(result);
      else reject("No books found for this author");
    });
    const result = await getByAuthor();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 4 & 13 - Get books by Title (Async/Await)
public_users.get('/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    const getByTitle = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.title === title);
      if (result.length > 0) resolve(result);
      else reject("No books found with this title");
    });
    const result = await getByTitle();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 5 - Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book.reviews);
  }
  return res.status(404).json({ message: "Book not found" });
});

module.exports.general = public_users;const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully" });
});

// Task 1 & 10 - Get all books (Async/Await)
public_users.get('/', async function (req, res) {
  try {
    const getBooks = () => new Promise((resolve) => resolve(books));
    const allBooks = await getBooks();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// Task 2 & 11 - Get book by ISBN (Promise)
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) resolve(book);
    else reject("Book not found");
  })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(404).json({ message: err }));
});

// Task 3 & 12 - Get books by Author (Async/Await)
public_users.get('/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    const getByAuthor = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.author === author);
      if (result.length > 0) resolve(result);
      else reject("No books found for this author");
    });
    const result = await getByAuthor();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 4 & 13 - Get books by Title (Async/Await)
public_users.get('/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    const getByTitle = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.title === title);
      if (result.length > 0) resolve(result);
      else reject("No books found with this title");
    });
    const result = await getByTitle();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 5 - Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book.reviews);
  }
  return res.status(404).json({ message: "Book not found" });
});

module.exports.general = public_users;const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully" });
});

// Task 1 & 10 - Get all books (Async/Await)
public_users.get('/', async function (req, res) {
  try {
    const getBooks = () => new Promise((resolve) => resolve(books));
    const allBooks = await getBooks();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// Task 2 & 11 - Get book by ISBN (Promise)
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) resolve(book);
    else reject("Book not found");
  })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(404).json({ message: err }));
});

// Task 3 & 12 - Get books by Author (Async/Await)
public_users.get('/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    const getByAuthor = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.author === author);
      if (result.length > 0) resolve(result);
      else reject("No books found for this author");
    });
    const result = await getByAuthor();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 4 & 13 - Get books by Title (Async/Await)
public_users.get('/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    const getByTitle = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.title === title);
      if (result.length > 0) resolve(result);
      else reject("No books found with this title");
    });
    const result = await getByTitle();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 5 - Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book.reviews);
  }
  return res.status(404).json({ message: "Book not found" });
});

module.exports.general = public_users;const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  return res.status(200).json({ message: "User registered successfully" });
});

// Task 1 & 10 - Get all books (Async/Await)
public_users.get('/', async function (req, res) {
  try {
    const getBooks = () => new Promise((resolve) => resolve(books));
    const allBooks = await getBooks();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books" });
  }
});

// Task 2 & 11 - Get book by ISBN (Promise)
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) resolve(book);
    else reject("Book not found");
  })
    .then(book => res.status(200).json(book))
    .catch(err => res.status(404).json({ message: err }));
});

// Task 3 & 12 - Get books by Author (Async/Await)
public_users.get('/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    const getByAuthor = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.author === author);
      if (result.length > 0) resolve(result);
      else reject("No books found for this author");
    });
    const result = await getByAuthor();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 4 & 13 - Get books by Title (Async/Await)
public_users.get('/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    const getByTitle = () => new Promise((resolve, reject) => {
      const result = Object.values(books).filter(b => b.title === title);
      if (result.length > 0) resolve(result);
      else reject("No books found with this title");
    });
    const result = await getByTitle();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

// Task 5 - Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book.reviews);
  }
  return res.status(404).json({ message: "Book not found" });
});

module.exports.general = public_users;
