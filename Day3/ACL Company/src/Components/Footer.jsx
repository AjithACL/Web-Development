// Footer.jsx
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <>
    <footer>
    <div className="socialmedia">
    <FontAwesomeIcon icon={faInstagram} style={{color:"white",height:'50px'}} />
      <FontAwesomeIcon icon={faFacebook} style={{color:"white",height:'50px'}}/>
      <FontAwesomeIcon icon={faLinkedin} style={{color:"white",height:'50px'}}/>
    </div>
    </footer>
    
     

      
    </>
  );
};

export default Footer;
