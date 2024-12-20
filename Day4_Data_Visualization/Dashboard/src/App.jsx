import Dashboard from "./component/Dashboard"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./component/Login"
import Home from "./component/Home"
import Register from "./component/Register"
const App=()=>{
  return(
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   </Router>
    </>
  )
}
export default App