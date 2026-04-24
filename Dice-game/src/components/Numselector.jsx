import React from "react";
import styled from "styled-components";

const Box = styled.div`
 background-color:${(props) => (props.$isselected ? "black" : "white")};
 color: ${(props) => (props.$isselected ? "white" : "black")};
  width: 40px;
  height: 38px;
  opacity: 1;
  border: 2px solid #000000;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Num_selector = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  margin-top: -75px;
  margin-right: -7px;
  flex-wrap: wrap;

  p {
    font-size: 20px;
    margin-right: 10px;
    position: relative;
    top: 48px;
    left: -132px;
  }
  h6{
   font-size: 20px;
    color: red;
    position: absolute;
    top: -38px;
    right: 218px;
  }    
`;


const Numselector = ({selected,setselected,error}) => {
  const myarray = [1, 2, 3, 4, 5, 6]; 

  return (
    <div>
      <Num_selector>
        <h6>{error}</h6>
        {myarray.map((value, i) => <Box key={i}  
        onClick={() =>  setselected(value) } 
        $isselected={selected === value}
        >
          {value}</Box>)}      
        <div>
          <p>Select Number</p>
        </div>
      </Num_selector>
    </div>
  );
};

export default Numselector;
