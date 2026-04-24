import React from 'react'
import './App.css'
import Firstpage from './components/Firstpage'
import Secondpage from './components/secondpage'


function App() {
  const [isopen, setisopen] = React.useState(true);


  return (
    <>
    {isopen ? <Secondpage/> : <Firstpage  setisopen={setisopen}/>}
    </>
  )
}

export default App
