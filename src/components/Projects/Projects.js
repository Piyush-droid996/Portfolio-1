import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zippy from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import Rental from "../../Assets/Projects/blog.jpg";
import Freelance from "../../Assets/Projects/Freelancing.jpg"
import CrudReact   from "../../Assets/Projects/crud.jpg"
import SM from "../../Assets/Projects/Student.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="JS-Form-Validation"
              description=" Showcasing a registration form. JavaScript is used for client-side validation, ensuring inputs for Username, Password, Confirm Password, Mobile Number, and Email meet specified criteria, enhancing user interaction and data integrity.."
              ghLink="https://github.com/Piyush-droid996/Js-validation.git"
              demoLink="https://piyush-droid996.github.io/Js-validation/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rental}
              title="Car-Rental-Java"
              description=" Car_Rental_System_JAVA The  Car Rental System is a Java-based application designed to manage the rental of cars  It provides users with the ability to browse available vehicles  make bookings  and easily return cars after use "
              ghLink="https://github.com/Piyush-droid996/Car_Rental_System_JAVA.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zippy}
              isBlog={false}
              title="Zippy E-Commerce"
              description="Zippy A E-Commerce Website incorporates responsive design elements using HTML Bootstrap5 Css and JavaScript It features a sleek navigation bar dynamic image carousels detailed product showcases and interactive sections for team profiles pricing plans  blogs  and a contact form with integrated Google "
              ghLink="https://github.com/Piyush-droid996/LGM-VIP-PIYUSH.git"
              demoLink="https://piyush-droid996.github.io/LGM-VIP-PIYUSH/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SM}
              isBlog={false}
              title="Student Management"
              description="The Student Management System is a web-based application designed to help educational institutions efficiently manage student information. Built using Java, Spring MVC, JSP, and JavaScript, the system provides a user-friendly interface for performing full CRUD operations (Create, Read, Update, Delete) on student records."
             
              demoLink="https://github.com/Piyush-droid996/StudentManagement.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CrudReact}
              isBlog={false}
              title="CRUD REACT NODE"
              description="This project is a **CRUD (Create, Read, Update, Delete)** application built with React for the frontend and Node.js for the backend. It provides a modern and responsive interface to manage a collection of items, such as users, products, or tasks."
              demoLink="https://github.com/Piyush-droid996/CrudReactNodejs.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Freelance}
              isBlog={false}
              title="Freelance"
              description="Freelance refers to working independently rather than being employed by a single company or organization. A freelancer offers services to clients on a project or contract basis, often in fields like writing, design, programming, marketing, or consulting. "
              ghLink="https://github.com/Piyush-droid996/Job_Portal.git"
              demoLink="https://piyush-droid996.github.io/Job_Portal/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
