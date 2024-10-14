import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiMongodb, DiJava } from "react-icons/di";
import { SiSpringboot, SiNodedotjs } from "react-icons/si"; // Import Node.js icon
import './Techstack.css'; // Import the CSS file

function Techstack() {
  const techData = [
    { icon: <CgCPlusPlus />, label: "C++" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiReact />, label: "React" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <DiJava />, label: "Java" },
    { icon: <SiSpringboot />, label: "Spring Boot" }, // Add Spring Boot
    { icon: <SiNodedotjs />, label: "Node.js" }, // Add Node.js
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techData.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tech-icon-container">
            {tech.icon}
            <p className="tech-label">{tech.label}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
