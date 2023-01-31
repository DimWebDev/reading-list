import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1``;

export const H1 = ({text}) => {
  return (
    <>
      <StyledH1>{text}</StyledH1>
    </>
  );
};
