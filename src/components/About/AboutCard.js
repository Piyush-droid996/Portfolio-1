import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Piyush Saxena</span>
             <br/>
              from <span className="purple"> Morena Madhya Pradesh, India.</span>
            <br />
            I am currently Pursuing PG-DAC AT CDAC-BANGLORE.
            <br />
            I have completed B.tech (JNU Jaipur) in Computer Science and Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games VolleyBall , Badminton
            </li>
          
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <footer className="blockquote-footer">Piyush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
