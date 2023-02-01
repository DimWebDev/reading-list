import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
}

interface BookContextProps {
  books: Book[];
  fetchBooks: () => Promise<void>;
  editBookById: (id: number, newTitle: string) => Promise<void>;
  deleteBookById: (id: number) => Promise<void>;
  handleCreateBook: (title: string) => void;
}

export const BookContext = createContext<BookContextProps | null>(null);

export const Provider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async (): Promise<void> => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id: number, newTitle: string): Promise<void> => {
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

  const deleteBookById = async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title: string): Promise<void> => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updatedBooksArray = [...books, response.data];
    setBooks(updatedBooksArray);
  };

  const sharedData: BookContextProps = {
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
