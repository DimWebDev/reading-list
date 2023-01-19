import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
align-items: center;
-moz-appearance: none;
-webkit-appearance: none;
border: 1px solid transparent;
border-radius: 4px;
box-shadow: none;
display: inline-flex;
font-size: 1rem;
height: 2.5em;
justify-content: flex-start;
line-height: 1.5;
padding: calc(0.5em - 1px) calc(0.75em - 1px);
position: relative;
vertical-align: top;
transition: 1ss;
margin: 5px 0px;
&:focus {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(176,255,226,1) 0%, rgba(112,200,255,1) 100%);
  width: 250px;
  border: none;
  color: blue;
  font-size: 20px;
}
}`;

export const StyledInputElement = ({ onChange, value }) => {
  return (
    <>
      <StyledInput onChange={onChange} value={value} />
    </>
  );
};
