import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;
interface StyledFormElementProps {
  onSubmit: () => void;
  children: React.ReactNode;
}

export const StyledFormElement: React.FC<StyledFormElementProps> = ({
  onSubmit,
  children,
}) => {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </>
  );
};
