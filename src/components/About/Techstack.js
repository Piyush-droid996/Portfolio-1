import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiJava,
  DiMysql,
  DiRedis,
  DiOpenshift,
} from "react-icons/di";
import { SiSpringboot, SiNodedotjs, SiSpringsecurity, SiMicrosoftazure, SiMicrosoftsqlserver } from "react-icons/si"; // Import Node.js icon
import "./Techstack.css"; // Import the CSS file

function Techstack() {
  const techData = [
    { icon: <DiJava />, label: "Java" },
   { icon: <SiSpringboot />, label: "Spring Boot" }, // Add Spring Boot
    { icon: <SiSpringsecurity />, label: "Spring Security" },
    { icon: <DiReact />, label: "ReactJS" },
    { icon: <DiMysql />, label: "MYSQL" },
    { icon: <DiRedis />, label: "Redis" },
    {icon: <DiOpenshift/>, label: "Openshift"},
    {icon: <SiMicrosoftazure/>, label: "Micorsoft Azure"},
    {icon:<SiMicrosoftsqlserver/>, label:"Microsoft Sql server"}
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
