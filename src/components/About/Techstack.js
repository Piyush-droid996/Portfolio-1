import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiJava,
  DiMysql,
  DiRedis,
  DiOpenshift,
} from "react-icons/di";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import "./Techstack.css";

function Techstack() {
  const techData = [
    { icon: <DiJava />, label: "Java" },
    { icon: <SiSpringboot />, label: "Spring Boot" },
    { icon: <SiSpringsecurity />, label: "Spring Security" },
    { icon: <DiReact />, label: "ReactJS" },
    { icon: <DiMysql />, label: "MySQL" },
    { icon: <DiRedis />, label: "Redis" },
    { icon: <DiOpenshift />, label: "OpenShift" },
    { icon: <SiMicrosoftazure />, label: "Microsoft Azure" },
    { icon: <SiMicrosoftsqlserver />, label: "Microsoft SQL Server" },
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