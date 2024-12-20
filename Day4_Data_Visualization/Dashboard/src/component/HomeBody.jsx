import "./HomeBody.css"
import Developer_image from "../assets/Developer_image.png"
const HomeBody=()=>{
    return(
        <>
        <div className="HomebodyContainer">

            <div className="coderImage">
            <img src={Developer_image} alt="" height="350px" width="350px"/>
            </div>
            <div className="HomepageContent">
                <div className="ourfeature">
                    <h2>Our Feature</h2>
                    <p>Comprehensive Tools: Access all the resources you need in one place <br />
                    24/7 Support: Our team is always here to assist you</p>
                </div>
                <div className="getStartToday">
                    <h2>Get Start Today!</h2>
                    <p>Join the thousands of satisfied users who trust [Your Website Name] <br />
                    [SignUp Now] or [Learn More] to discover what we can do for you!</p>
                </div>
                <div className="hereHowTogetStart">
                <h2>Here's How to Get Started</h2>
                   <ol type="1">
                    <li> Sign Up for Free and unlock exclusive tools.</li>
                    <li> Explore Our Features to see what suits you.</li>
                    <li>Stay Connected with updates tailored just for you</li>
                   </ol>
                </div>

            </div>
            
        </div>
        </>
    )
}
export default HomeBody;