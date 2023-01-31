import React from "react";
import styled from "styled-components";


const StyledLabel= styled.label`
  color: white;
`

export const Label = ({ text }) => {
  return (
    <>
      <StyledLabel>{text}</StyledLabel>
    </>
  );
};
