import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/IMG_6700.jpeg">
        <h1>Welcome!</h1>
        <h2>Here's a Little Info About Me!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-12">
          <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/IMG_3610.jpeg" width="275" height="275" alt="Person" />
          <p className="text-info">My name is Jonathan Smith. I'm from Lakeland, FL and am working hard to become a web developer. I love animals and sports.
          I graduated with a BS degree in Biochemistry from Florida Southern College. I have two older brothers and a dog named Sam. I enjoy solving puzzles and am a great
          team member who works well with others. I want to take my experience from the UCF bootcamp that I am taking and use all of my newfound knowledge to pursue a career
          in software development.    
          </p>  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
