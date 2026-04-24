import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h1 {
   font-family: Poppins;
    font-weight: 600;
    font-size: 50px;
    margin-left:26px;
    margin-top: -9px;
    
  }
  p{
    margin-top: -37px;
    font-size: 18px;
  }
  div{
       margin-left: 57px;
       margin-top: 17px;
  }
`;

const Score = ({Score}) => {
  return (
    <Container>
      <div>
        <h1>{Score}</h1>
        <p>Total Score</p>
      </div>
    </Container>
  );
};

export default Score;
