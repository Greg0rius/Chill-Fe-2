import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup/signup"
import Login from "./pages/Login/login"
import Home from "./pages/Home/home"

function App() {

  return (
   <Router>
    <Routes>
      <Route path="login" element={<Login/>}> </Route>
      <Route path="signup" element={<Signup/>}> </Route>
       <Route path="/" element={<Home/>}> </Route> 
    </Routes>
   </Router>
  )
}

export default App
