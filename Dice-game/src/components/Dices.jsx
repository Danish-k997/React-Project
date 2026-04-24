import React from 'react'

import styled from "styled-components";

const Container = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 180px;
    height: 165px;
    margin-top: 32px;
    margin-right: 83px;
}
p{
  margin-right: 82px;
    font-size: 18px;
}

.rest{
  background-color: white;
  color: black;
    padding: 7px 20px;
    width: 100%;
    margin-top: -12px;
    border-radius: 10px;
    font-size: 18px;
    margin-left: -38px;
    &:hover{
      background-color:black; 
      color:white;
      transition: all 0.5s ease-in-out;
    }
} 
.rule{
  background-color: black;
  color: white;
    padding: 7px 20px;
    width: 100%;
    margin-right: 74px;
    margin-top: -12px;
    border-radius: 10px;
    font-size: 18px;
    margin-left: -39px;
    &:hover{
      background-color:white;
      color:black;
       transition: all 0.5s ease-in-out;
    }
}
.btns{
  display: flex;
  flex-direction: column;
 gap: 21px;
}
`



const Dices = ({currentnum,setselected,handleDiceClick,resetgame,setrules}) => {


 
  return (
    
      <Container>
        <img 
        onClick={() => { 
       handleDiceClick()
        setselected(null);

        
        }}
        src={`image/dice_${currentnum}.png`} alt=""  />
        <p>Click on Dice to roll</p>
          <div className='btns'>
        <button className='rest'onClick={() => resetgame()} >reset store</button>
        <button className='rule' onClick={() => setrules((prev)=> !prev)} >show Rules</button>
          </div>
     </Container>
    
  )
}

export default Dices
