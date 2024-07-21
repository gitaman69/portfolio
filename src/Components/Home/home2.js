import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ReadyPlayerMe-Avatar-modified.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color:"white" }}>
              LET ME <span className="purple" style={{color:"yellow"}}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{color:"white"}}>
              I am a 3rd year Electrical Engineering undergrad at MNIT Jaipur
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              I am a <b className="purple">tech geek</b> and always learn and explore things related to <i><b className="purple">Technology and Softwares</b></i>.
              <br />
              <br />
              I have knowledge of <i><b className="purple">ReactJS, Bootstrap, JavaScript, C++, HTML, CSS, SCSS</b></i>.
              <br />
              <br />
              Currently I'm learning <i><b className="purple">App Development</b></i>.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{color:"yellow"}}>FIND ME ON</h1>
            <p style={{color:"white"}}>
              Feel free to <span style={{color:"yellow"}} className="purple">connect </span>with me
            </p>
            <ul style={{display:"flex", justifyContent:"left", alignItems:"center", fontSize:"30px", columnGap:"50px", color:"white"}} className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gitaman69"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{
                        color: hover1 ? 'yellow' : 'white', // Change color on hover
                        transition: 'color 0.3s ease'      // Smooth transition effect
                    }}
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aman-bhakar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{
                        color: hover2 ? 'yellow' : 'white', // Change color on hover
                        transition: 'color 0.3s ease'      // Smooth transition effect
                    }}
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Ninja_Gaming_Y?t=VrisVAqMJf8aaNk97co-OQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter style={{
                        color: hover3 ? 'yellow' : 'white', // Change color on hover
                        transition: 'color 0.3s ease'      // Smooth transition effect
                    }}
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ig__aman?igsh=OHB4eTk0dXZrMGVw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram
                    style={{
                        color: hover4 ? 'yellow' : 'white', // Change color on hover
                        transition: 'color 0.3s ease'      // Smooth transition effect
                    }}
                    onMouseEnter={() => setHover4(true)}
                    onMouseLeave={() => setHover4(false)}
                    />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;