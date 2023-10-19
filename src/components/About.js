import "../css/About.css";
import design from "../images/design.svg";
import html from "../images/html.svg";
import react from "../images/react.svg";
import photo from "../images/image2.jpg";
const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <h2>About me</h2>

        <div className="line"></div>
      </div>

      <div className="main">
        {/* section1 */}
        <div className="about-me">
          <img src={photo} />
          <div className="about-right">
            <h1>Mukka Tarun</h1>
            <p>
              Namaste!🙏🏼 I'm Tarun, a Frontend Developer and Designer deeply
              immersed in the world of React. My design roots have instilled in
              me an unwavering passion for crafting web experiences that are not
              only visually captivating but also deeply focused on the needs of
              the users.
            </p>{" "}
            <br></br>
            <p>
              {" "}
              React is my creative playground, where I transform design concepts
              into interactive realities. I bring proficiency in a spectrum of
              essential tools, including HTML, CSS, JavaScript and Bootstrap, to
              breathe life into the digital canvas.
            </p>{" "}
            <br></br>
            <p>
              My commitment lies in the trinity of clean code, responsive
              design, and optimal performance. In the ever-evolving landscape of
              web development, I'm dedicated to continuous learning and growth.
              Let's join forces to breathe life into your ideas, creating
              seamless web solutions that not only meet your vision but exceed
              it.
            </p>
          </div>
        </div>
        {/* section2 */}
        <div className="cards">
          <div className="card ">
            <img src={design} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Design & exprience</h6>
              <p>Design principles, wireframes, UX laws, UI and logo branding.</p>
            </div>
          </div>
          <div className="card ">
            <img src={html} />
            <div className="line"></div>
            <div className="card-content">
              <h6>HTML & CSS</h6>
              <p>Seamless responsive websites that load super fast.</p>
            </div>
          </div>
          <div className="card ">
            <img src={react} />
            <div className="line"></div>
            <div className="card-content">
              <h6>React.js</h6>
              <p>Build your system with react and node.js</p>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="boxes">
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I work and study about</h6>
              <p>Coding React.js</p>
              <p>Coding Javascript</p>
              <p>Studying Express.js basics</p>
              <p>Studying Node.js basics</p>
              <p>Studying API RESTful</p>
              <p>Studying AWS Cloud</p>
              <p>Studying UX Laws</p>
            </div>
          </div>
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I've had experiences with</h6>
              <p>MySQL Database</p>
              <p>Coding PHP</p>
              <p>Coding Python</p>
              <p>Graphic designing using GIMP</p>
              <p>Coding Java</p>
              <p>GIT, GitHub</p>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
