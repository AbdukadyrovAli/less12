import React from "react";
import styled from "styled-components";

export const MealCard = () => {
  return (
    <Wrapper>
      <Container>
        <h3>Delicious Food, Delivered To You</h3>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </p>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -180px;
`;

const Container = styled.div`
  width: 854px;
  height: 270px;
  background: #383838;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 36px 0;

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 0 40px;
    color: #ffffff;
  }
`;
