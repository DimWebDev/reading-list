import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const StyledFormElement = ({ onSubmit, children }) => {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </>
  );
};
