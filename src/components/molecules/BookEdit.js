import React from "react";
import styled from "styled-components";
import { StyledInputElement } from "../atoms/input/StyledInput";
import { StyledButtonElement } from "../atoms/button/StyledButton";
import { Label } from "../atoms/label/Label";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const BookEdit = () => {
  return (
    <StyledForm>
      <Label text="Title" />
      <StyledInputElement />
      <StyledButtonElement text="Save"></StyledButtonElement>
    </StyledForm>
  );
};
