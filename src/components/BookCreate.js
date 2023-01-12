import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
  background-color: #00d1b2;
  bottom: 0;
  padding: 20px 40px 30px;
  position: fixed;
  width: 100%;
  h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }
  form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }
`;

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
margin: 5px 0px;
&:focus {
    background-color: blue;
    color: white;
}
}`;

const StyledButton = styled.button`
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
  margin: 5px 0px;
`;

export const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <StyledContainer>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <StyledInput
          id="title"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <StyledButton>Create!</StyledButton>
      </form>
    </StyledContainer>
  );
};
