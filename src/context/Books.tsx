import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

export const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updatedBooksArray = [...books, response.data];
    setBooks(updatedBooksArray);
  };

  const sharedData = {
    books: books,
    fetchBooks: fetchBooks,
    editBookById: editBookById,
    deleteBookById: deleteBookById,
    handleCreateBook: handleCreateBook,
  };

  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};