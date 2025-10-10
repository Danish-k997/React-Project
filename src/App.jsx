
import './App.css'
import UserContaxtProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/profile'


function App() {
  
  return (
    <UserContaxtProvider>
    <h1>Work like hell</h1>  
    <Login/>
     <Profile/>
    </UserContaxtProvider>
  )
}

export default App
