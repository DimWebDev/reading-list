import React from "react";
import styled from "styled-components";

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
  h3 {
    font-size: 24px;
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

const StyledButton = styled.button`
  -webkit-touch-callout: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: hsla(0, 0%, 4%, 0.2);
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  pointer-events: auto;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  vertical-align: top;
  width: 20px;

  &:after,
  &:before {
    background-color: #fff;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  &:before {
    height: 2px;
    width: 50%;
  }
  &:after {
    height: 50%;
    width: 2px;
  }
`;

export const BookTile = ({ book, onDelete }) => {
  const handleClick = () => {
    onDelete(book.id);
  };

  return (
    <StyledBookTileContainer>
      {book.title}
      <div className="actions">
        <StyledButton onClick={handleClick}>Delete Book</StyledButton>
      </div>
    </StyledBookTileContainer>
  );
};
