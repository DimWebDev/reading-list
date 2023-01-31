import React from "react";
import styled from "styled-components";

const StyledCreateButton = styled.button`
  align-items: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
  position: relative;
  vertical-align: top;
  margin: 5px 0px;
`;

const StyledXIconButton = styled.button`
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

const StyledPencilIconButton = styled.button`
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
  vertical-align: top;
  width: 20px;
  &:after {
    color: #fff;
    content: "✎";
    display: block;
    font-size: 15px;
    font-weight: 700;
    height: 20px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(20deg);
    transform: translateX(-50%) translateY(-50%) rotate(20deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    width: 20px;
    z-index: 10;
`;

const StyledSaveButton = styled.button`
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
  &:hover {
    background-color: #00c4a7;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
  }
  &:focus {
    border-color: transparent;
    color: #fff;
  }
`;
interface StyledButtonElementProps {
  type: string;
  onClick: () => void;
  text: string;
}

export const StyledButtonElement: React.FC<StyledButtonElementProps> = ({
  type,
  onClick,
  text,
}) => {
  const Button =
    type === "create"
      ? StyledCreateButton
      : type === "edit"
      ? StyledPencilIconButton
      : type === "delete"
      ? StyledXIconButton
      : StyledSaveButton;

  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
};
