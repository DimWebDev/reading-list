import React, { useState } from "react";
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

interface BookEditProps {
  book: {
    id: string;
    title: string;
  };
  onSubmit: () => void;
}

export const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
