import React from "react";
import styled from "styled-components";
import { useBooksContext } from "../../hooks/useBooksContext";
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

export interface BookTileProps {
  book: {
    id: string;
    title: string;
    author: string;
    publicationDate: string;
  };
}

export const BookList: React.FC = () => {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookTile key={book.id} book={book} />;
  });

  return <StyledBookListContainer>{renderedBooks}</StyledBookListContainer>;
};

export default BookList;
