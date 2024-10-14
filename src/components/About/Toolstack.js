import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiEclipseide,
} from "react-icons/si";
import "./Toolstack.css"; // Import the CSS file for the styles

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper" title="Visual Studio Code">
          <SiVisualstudiocode />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper" title="Postman">
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper" title="Vercel">
          <SiVercel />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper" title="Eclipse IDE">
          <SiEclipseide />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
