import React, { useEffect } from "react";
import styled from "styled-components";
import { useBooksContext } from "../../hooks/useBooksContext";
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
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledReadindListContainer>
      <H1 text="Reading List Application" />
      <BookList />
      <BookCreate />
    </StyledReadindListContainer>
  );
};
