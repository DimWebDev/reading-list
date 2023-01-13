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

export const BookEdit = ({ bookTitle }) => {
  const [title, setTitle] = useState(bookTitle);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label text="Title" />
      <StyledInputElement onChange={handleChange} value={title} />
      <StyledButtonElement text="Save"></StyledButtonElement>
    </StyledForm>
  );
};
