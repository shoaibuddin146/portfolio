import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


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
              isBlog={false}
              title="Chatify"
              description="Here is a project we developed as mini project in C bank management system during our first semester; it is complete and totally error-free. This project is focused on customer account services in bank, so it is named “Customer Account Bank Management System”.

              Here, you can create a new account, update information of an existing account, view and manage transactions, check the details of an existing account, remove existing account and view customers’ list"
              link="https://github.com/shoaibuddin146/bankmanagement-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/shoaibuddin146/cats_vs_dogs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="This is weather application with nodejs backend server which is serving to handlebars template

              I have created this application with node.js as the backend server. I've used two APIs for getting the weather inforamtion. First one is mapbox API which finds the latitude and longitude of the entered locaiton. Then passing the lat, lon location to the OpenweatherAPI for finding the weather information. The node.js API is served on the the custom endpoints on which the frontend can make use of the API and get weather information. Front end is served by handlebar templates."
              link="https://github.com/shoaibuddin146/COURSE"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
