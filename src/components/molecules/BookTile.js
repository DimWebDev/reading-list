import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BookEdit } from "./BookEdit";
import { StyledButtonElement } from "../atoms/button/StyledButton";
import { StyledDivElement } from "../atoms/div/StyledDiv";

const StyledBookTileContainer = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  width: 300px;
  align-self: flex-start;
  box-shadow: 5px 5px 5px #c8c8c8;
  position: relative;
  @media screen and (max-width: 961px) {
    align-self: center;
  }
  img {
    margin-top: 10px;
    width: 100%;
  }
  button {
    margin-right: 5px;
  }
  .actions {
    margin-left: 10px;
    position: absolute;
    right: 0;
    top: 5px;
  }
`;

export const BookTile = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <StyledBookTileContainer>
      <StyledDivElement>{content}</StyledDivElement>
      <StyledDivElement type="actions">
        <StyledButtonElement
          type="edit"
          onClick={handleEditClick}
        ></StyledButtonElement>
        <StyledButtonElement type="delete" onClick={handleDeleteClick}>
          Delete Book
        </StyledButtonElement>
      </StyledDivElement>
    </StyledBookTileContainer>
  );
};
