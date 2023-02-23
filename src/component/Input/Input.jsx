import React from "react";
import { ErrorLabel, InputStyled, Label, LabelContainer } from "./Input.styled";

const Input = (props) => {
  const { inputName, placeHolder, errorMessage, type } = props;
  return (
    <div style={{ marginTop: "10px" }}>
      <LabelContainer>
        <Label>{inputName}</Label>
        {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
      </LabelContainer>
      <InputStyled placeholder={placeHolder} type={type} />
    </div>
  );
};

export default Input;
