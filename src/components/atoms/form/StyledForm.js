import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledFormElement = ({ onSubmit, children }) => {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </>
  );
};
