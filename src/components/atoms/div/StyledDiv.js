import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 10px;
  position: absolute;
  right: 0;
  top: 5px;
`;

const UnstyledDiv = styled.div``;

export const StyledDivElement = (props) => {
  const DivElement = props.type === "actions" ? StyledDiv : UnstyledDiv;

  return (
    <>
      <DivElement>{props.children}</DivElement>
    </>
  );
};
