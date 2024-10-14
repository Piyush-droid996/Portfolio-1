import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import './Github.css'; // Import the CSS file

function Github() {
  return (
    <Row className="github-container">
      <Col xs={12} style={{ textAlign: "center" }}>
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
        <div className="github-calendar">
          <GitHubCalendar
            username="Piyush-droid996"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
        <p className="contributions-overview">
          Contributions Overview:
        </p>
        <ul className="contributions-list">
          <li>✨ Regular contributions to open-source projects</li>
          <li>💡 Engaging in various programming challenges</li>
          <li>🛠️ Collaborating with other developers on GitHub</li>
          <li>📅 Committed to learning and improving daily</li>
        </ul>
      </Col>
    </Row>
  );
}

export default Github;
