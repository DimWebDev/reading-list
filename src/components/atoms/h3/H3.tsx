import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

interface H3Props {
  text: string;
}

export const H3: React.FC<H3Props> = ({ text }) => {
  return (
    <>
      <StyledH3>{text}</StyledH3>
    </>
  );
};
