import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1.4em;
  padding: 10px 20px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.7);
  border: none;
`;

const StyledLabel = styled.label`
  color: red;
`;

const alertStyle = {
  border: "1px solid red",
  backgroundColor: "rgba(255, 0, 0, 0.4)",
};

const InputGroup = ({ name, placeholder, errorMessage, validation }) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const handleBlur = () => {
    console.log("trigger", validation(value));
    setError(!validation(value));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setError(false);
  };

  return (
    <>
      <StyledInput
        style={error ? alertStyle : null}
        name={name}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error ? <StyledLabel htmlFor={name}>{errorMessage}</StyledLabel> : null}
    </>
  );
};

export default InputGroup;
