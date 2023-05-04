import React from "react";
import styled from "styled-components";

export const Button = ({children
}) => {
  return (
    <MyButton>
      {children}
    </MyButton>
  );
};
const MyButton = styled.button`
  background: #8A2B06;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

