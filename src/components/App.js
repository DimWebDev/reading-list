import React from "react";
import { useState } from "react";
import { BookCreate } from "./BookCreate";

export const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const updatedBooksArray = [...books, { id: 123, title: title }];
    setBooks(updatedBooksArray);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};
