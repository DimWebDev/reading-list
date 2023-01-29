import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BookContext } from "../../context/Books";
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
  const { count, incrementCount } = useContext(BookContext);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };

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

  // ############ Equivalent delete solution to update the local state
  // ############ of the component by doing a new GET request to our server
  // const deleteBookById = async (id) => {
  //   await axios.delete(`http://localhost:3001/books/${id}`);

  //   const response = await axios.get("http://localhost:3001/books");
  //   setBooks(response.data);
  // };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updatedBooksArray = [...books, response.data];
    setBooks(updatedBooksArray);
  };

  return (
    <StyledReadindListContainer>
      <H1 text="Reading List Application" />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={handleCreateBook} />
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </StyledReadindListContainer>
  );
};
