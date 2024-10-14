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
            <br />
            from <span className="purple">Morena, Madhya Pradesh, India.</span>
            <br />
            I have completed my PG-DAC from CDAC, Bangalore.
            <br />
            I also hold a B.Tech degree in Computer Science and Engineering from JNU, Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball and Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading tech blogs and keeping up with the latest trends
            </li>
          </ul>
          <footer className="blockquote-footer">Piyush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
