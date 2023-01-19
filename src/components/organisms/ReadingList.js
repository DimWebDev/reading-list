import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { H1 } from "../atoms/h1/H1";
import { BookCreate } from "../molecules/BookCreate";
import { BookList } from "../molecules/BookList";

const StyledReadindListContainer = styled.div`
  margin: 0px 10px 215p 0px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  h1 {
    font-size: 48px;
    font-weight: 800;
    margin: auto;
    max-width: 1024px;
    padding: 20px;
  }
`;

export const ReadingList = () => {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

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
    <StyledReadindListContainer>
      <H1 text="Reading List Application" />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </StyledReadindListContainer>
  );
};
