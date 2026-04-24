import React from 'react'
import Score from './Score'
import Numselector from './Numselector';
import Dices from './Dices';
import Rules from './Rules';



const secondpage = () => {
  
  const [selected, setselected] = React.useState();
 const [currentnum,setcurrentnum] = React.useState(1)
 const [score,setscore] = React.useState(0) 
 const [error,seterror] = React.useState() 
 const [rules,setrules] = React.useState(false)

 const generateRandomNumber = () => {
    return  Math.floor(Math.random() * 6) + 1

  }

   const handleDiceClick = () => {
    if(!selected) {
      seterror("You have not selected any number") 
      return;
    }
    seterror('')
   const ramdomnum = generateRandomNumber() 
    setcurrentnum(ramdomnum)
    checkscore(ramdomnum)

   }
 const checkscore = (ramdomnum) => {
  if(ramdomnum === selected){
    setscore((prev) => prev + 1)
  }else{
    setscore((prev) => prev - 1)
  }
}  
function resetgame(){
  setscore(0)
  setselected()
  setcurrentnum(1)
}

  return (
    
    <div>
      <Score  
      Score={score}
      />
      <Numselector  
      error={error}
      selected={selected}
      setselected={setselected}
      />
      <Dices 
      currentnum={currentnum}
      setcurrentnum={setcurrentnum}
      handleDiceClick={handleDiceClick}
      setselected={setselected}
      resetgame={resetgame}
      setrules={setrules}
      /> 
      {rules && <Rules/>}
    
    </div>
  )
}

export default secondpage
