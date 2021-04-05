import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";
import Background from "../components/Background";


function About() {
  return (
    <div>
        <Background />
      <Hero backgroundImage="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/IMG_6700.jpeg">
        <h1>Welcome!</h1>
        <h2>Here's a Little Info About Me!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-3">
          <img id="me" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/IMG_3610.jpeg" width="275" height="275" alt="Person" />
          </Col>
          <Col size="md-9">
          <p className="text">My name is Jonathan Smith. I'm from Lakeland, FL and am working hard to become a web developer.
          I graduated with a BS degree in Biochemistry from Florida Southern College. I enjoy solving puzzles and am a great
          team member who works well with others. I want to take my experience from the UCF bootcamp that I am taking and use all of my newfound knowledge to pursue a career
          in software development.  
          </p>
          <div class="skills">
            <div class="skill-bars">
                <div class="bar">
                    <div class="info">
                        <span>HTML</span>
                    </div>
                    <div class="progress-line html">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="progress-line css">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>Javascript</span>
                    </div>
                    <div class="progress-line javascript">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>jQuery</span>
                    </div>
                    <div class="progress-line jQuery">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>React</span>
                    </div>
                    <div class="progress-line react">
                        <span></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>Node</span>
                    </div>
                    <div class="progress-line node">
                        <span></span>
                    </div>
                </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default About;
