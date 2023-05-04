import React from "react";
import styled from "styled-components";

export const Input = () => {
  return (
    <div>
      <Label>
        Amount
        <InputNumber type="number" />
      </Label>
    </div>
  );
};

const InputNumber = styled.input`
  width: 60px;
  height: 32px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
`;
const Label = styled.label`
  width: 75px;
  height: 27px;
  font-weight: 600;
  font-size: 18px;
  color: #222222;
`;
