import Dashboard from "./component/Dashboard"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./component/Login"
import Home from "./component/Home"
import Register from "./component/Register"
import Dataset from "./Dataset/Dataset"
const App=()=>{
  return(
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/dataset" element={<Dataset/>}/>
    </Routes>
   </Router>
    </>
  )
}
export default App