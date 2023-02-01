import React from "react";
import styled from "styled-components";

interface H1Props {
  text: string;
}

const StyledH1 = styled.h1``;

export const H1: React.FC<H1Props> = ({ text }) => {
  return (
    <>
      <StyledH1>{text}</StyledH1>
    </>
  );
};
