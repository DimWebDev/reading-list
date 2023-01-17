import React from "react";
import styled from "styled-components";
import { BookTile } from "./BookTile";

const StyledBookListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1024px;
  @media screen and (max-width: 960px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    max-width: 1024px;
  }
`;

export const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookTile key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <StyledBookListContainer>{renderedBooks}</StyledBookListContainer>;
};
