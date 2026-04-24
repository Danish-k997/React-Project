import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  div{
   border: 2px solid black;
    width: 475px;
    padding: 10px 12px;
    margin: 0 auto;
    background-color: bisque;
    font-size: 17px;
    margin-top: 12px;
    border-radius: 10px;
  } 
  `

const Rules = () => {
  return (
    <Container>
    <div>
      <h3>How to play dice game</h3>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p> 
      <p>if you get wrong guess then  1 point will be dedcuted </p>
    </div>
    </Container>
  )
}

export default Rules
