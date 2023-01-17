import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { StyledInputElement } from "../atoms/input/StyledInput";
import { StyledButtonElement } from "../atoms/button/StyledButton";
import { Label } from "../atoms/label/Label";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const BookEdit = ({ book, onEdit, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label text="Title" />
      <StyledInputElement onChange={handleChange} value={title} />
      <StyledButtonElement text="Save"></StyledButtonElement>
    </StyledForm>
  );
};
