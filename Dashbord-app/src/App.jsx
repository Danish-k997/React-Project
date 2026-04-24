import Dashbord from "./Pages/Dashbord/Dashbord"
import TransitionPage from "./Pages/Transtion/TranstionPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Support from "./Pages/Support/Support"
const router = createBrowserRouter([
  {
    path:"/",
    element:<Dashbord/>
  },
  {
    path:"/TransitionPage",
    element:<TransitionPage/>
  },
  {
    path:"/Support",
    element:<Support/>
  },
])



function App() {
  return (
    <>
    <RouterProvider router={router} />
     
    
    </>
  )
}

export default App
