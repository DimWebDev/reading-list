import React from "react";
import styled from "styled-components";

interface LabelProps {
  text: string;
}

const StyledLabel = styled.label`
  color: white;
`;

export const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <>
      <StyledLabel>{text}</StyledLabel>
    </>
  );
};
