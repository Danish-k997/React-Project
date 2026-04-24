import React from "react";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 478px;
    height: 376px;
    opacity: 1;
    margin-right: 52px;
  }

  h1 {
   width: 484px;
    height: 10px;
    opacity: 1;
    font-family: Poppins;
    font-weight: 700;
    font-size: 80px;
    line-height: 70%;
  }
  button {
      background-color: black;
        color: white;
        margin-left: 223px;
  }
`;

const Firstpage = ({setisopen}) => {

  return (
    <Container>
      <div className="image">
        <img src="\image\dieses.png" alt="dice" />
      </div>
      <div className="text">
        <h1 className="heading">Dice Game</h1>
        <button 
         onClick={() => setisopen(true)}>
          Play Now
          </button>
      </div>
    </Container>
  );
};

export default Firstpage;
