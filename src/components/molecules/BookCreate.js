import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { StyledInputElement } from "../atoms/input/StyledInput";
import { StyledButtonElement } from "../atoms/button/StyledButton";
import { StyledFormElement } from "../atoms/form/StyledForm";
import { Label } from "../atoms/label/Label";
import { H3 } from "../atoms/h3/H3";

const StyledContainer = styled.div`
  background-color: #00d1b2;
  left: 0px;
  bottom: 0;
  padding: 20px 40px 30px;
  position: fixed;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

export const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <StyledContainer>
      <H3 text="Add a book" />
      <StyledFormElement onSubmit={handleSubmit}>
        <Label text="Title" />
        <StyledInputElement
          id="title"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <StyledButtonElement type="create" text="Create!" />
      </StyledFormElement>
    </StyledContainer>
  );
};
