import "../css/Contact.css"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Contact = () => {
    return ( 
        <div className="main contact" id="contact">
            <h2>Contact me</h2>
            <div className="underline"></div>
            <div className="social-media">
                <a href="https://instagram.com/_.taroon._?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={instagram}/></a>
                <a href="https://www.linkedin.com/in/mukka-tarun-48014427b/" target="_blank"><img src={linkedin}/></a>
                <a href="https://github.com/Mukka-Tarun" target="_blank"><img src={github}/></a>

            </div>
        </div>
     );
}
 
export default Contact;