import React from "react";
import styled from "styled-components";

const StyledImg = styled.img``;

export const Img = ({ src }) => {
  return (
    <>
      <StyledImg src={src} />
    </>
  );
};
