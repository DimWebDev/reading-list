import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { StyledInputElement } from "../atoms/input/StyledInput";
import { StyledButtonElement } from "../atoms/button/StyledButton";
import { Label } from "../atoms/label/Label";

import { useBooksContext } from "../../hooks/useBooksContext";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

export const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label text="Title" />
      <StyledInputElement onChange={handleChange} value={title} />
      <StyledButtonElement text="Save"></StyledButtonElement>
    </StyledForm>
  );
};
