import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BookCreate } from "./BookCreate";
import { BookList } from "./BookList";

const StyledAppContainer = styled.div`
  margin-bottom: 215px;
  position: relative;
  h1 {
    font-size: 48px;
    font-weight: 800;
    margin: auto;
    max-width: 1024px;
    padding: 20px;
  }
`;

export const App = () => {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = (title) => {
    const randomID = Math.round(Math.random() * 999);
    const updatedBooksArray = [...books, { id: randomID, title: title }];
    setBooks(updatedBooksArray);
  };

  return (
    <StyledAppContainer>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </StyledAppContainer>
  );
};
