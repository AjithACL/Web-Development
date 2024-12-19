import "./Navbar.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-brands-svg-icons";
const Navbar=()=>{
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
</ul>
<div className="nav-btn">
    <button className="Login-btn">Login</button>
    <button className="register-btn">Register</button>
</div>
<div className="bar">
{/* <FontAwesomeIcon icon={faBars} /> */}
</div>

</nav>
</>)
}
export default Navbar