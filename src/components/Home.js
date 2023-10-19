import React, { useState } from 'react';
import '../css/Home.css';
import photo from "../images/image1.jpg"
const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <div className='main home' id='home'>
          {/* navbar */}
            <nav>
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <div className={`navlinks ${menuOpen ? "active" : ""}`}>
          <h3><a href="#home" >Home</a></h3>
          {/* <h3><a href="#project">Projects</a></h3> */}
          <h3><a href="#about">About</a></h3>
          <h3><a href="#contact">Contact</a></h3>
          </div>
        </div>
        {/* hamburger */}
        <div className={`hamburger-menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
        </div>
      </nav>
      {/* home */}
      <img src={photo} width="90px" className='photo'/>
      <div>
        <h1 className='name'>Mukka Tarun</h1>
        <h1 className='text'>Front end Web Developer and UI/UX designer</h1>
        <p className='home-content'>I have a deep and passionate love for front-end development, which is beautifully complemented by my keen interest in UI/UX design. My journey through interface design has sculpted me into an individual with an unrelenting eye for precision. It's this level of meticulousness that I bring to my work, striving to create web experiences that not only function flawlessly but also delight the eyes and senses of users. </p>
      </div>
      <a href='https://drive.google.com/file/d/1X1yp2Eqcp4od8O7PpRORIRxZJNHTBlxX/view?usp=sharing' target='_blank' className='resume'>Download Resume</a>
      <img width="28" height="28" src="https://img.icons8.com/pastel-glyph/64/download--v2.png" alt="download--v2" className='download-img'/>
        </div>

        
      );
}
 
export default Home;