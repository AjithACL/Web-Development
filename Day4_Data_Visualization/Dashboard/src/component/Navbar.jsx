import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-brands-svg-icons";
const Navbar=()=>{
    const navigate=useNavigate();
    const loginpage=()=>{
        navigate("/login")

    }
    const registerPage=()=>{
        navigate("/register")
    }
return(
<>
<nav>
<div className="nav-logo">
    <h1>ACL Digital</h1>
</div>
<ul>
    <li>Main</li>
    <li>About</li>
    <li>Program</li>
    <li>Price</li>
    <li>Contact</li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
</ul>
<div className="nav-btn">
    <button className="Login-btn" onClick={loginpage}>Login</button>
    <button className="register-btn" onClick={registerPage}>Register</button>
</div>


</nav>
</>)
}
export default Navbar