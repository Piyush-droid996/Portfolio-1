import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Passport_Photograph_..jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Greetings! Delighted to have you visit my profile 😊.
              <br />
              I'm passionate about pushing the boundaries of technology. Always
              hungry for new challenges and eager to expand my skill set.
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                  As a dedicated B.Tech Computer Science student at Jaipur
                  National University, I've immersed myself in the world of
                  frontend development through internships. Armed with expertise
                  in C/C++ and adeptness in HTML, CSS, Bootstrap, JavaScript,
                  and React.js,{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            style={{ textAlign: "center", marginTop: "20px", height:"50vh" }}
          >
            <Tilt
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Piyush-droid996"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/piyush--saxena/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
