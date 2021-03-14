import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

function Portfolio() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/IMG_6700.jpeg">
        <h1>My Portfolio</h1>
        <h2>Take a Look at Some of my Projects!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
      
        <Row>
          <Col size="md-4">
          <u>Weather Dashboard</u>
          <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Weather_Dashboard.jpeg" width="350" height="350" alt="weather" />
          <a href="https://github.com/jpls218/WeatherReport.git"><button type="button" className="btn btn-primary">Github</button></a>
          <a href="https://jpls218.github.io/WeatherReport/"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
          <Col size="md-4">
          <u>battleNodes</u>
          <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/battleNodes.jpeg" width="350" height="350" alt="battlenodes" />
          <a href="https://github.com/jpls218/whos-your-data.git"><button type="button" className="btn btn-primary">Github</button></a>
          <a href="https://protected-beach-35913.herokuapp.com/"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
          <Col size="md-4">
          <u>Workday Schedule</u>
          <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Workday_Schedule.jpeg" width="350" height="350" alt="weather" />
          <a href="https://github.com/jpls218/WorkDaySchedule.git"><button type="button" className="btn btn-primary">Github</button></a>
          <a href="https://jpls218.github.io/WorkDaySchedule/"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
        </Row>
        <Row>
        <Col size="md-4">
        <u>Eat-Da-Burger!</u>
        <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Eat-Da-Burger.jpeg" width="350" height="350" alt="weather" />
        <a href="https://github.com/jpls218/Burgers_Node_Express.git"><button type="button" className="btn btn-primary">Github</button></a>
        <a href="https://jpls218.github.io/Burgers_Node_Express/"><button type="button" className="btn btn-primary">Link</button></a>
        </Col>
        <Col size="md-4">
        <u>Password Generator</u>
        <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Password_Generator.jpeg" width="350" height="350" alt="weather" />
        <a href="https://github.com/jpls218/Password_Generator.git"><button type="button" className="btn btn-primary">Github</button></a>
        <a href="https://jpls218.github.io/Password_Generator/"><button type="button" className="btn btn-primary">Link</button></a>
        </Col>
        <Col size="md-4">
        <u>Employee Directory</u>
        <img className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Employee_Directory.jpeg" width="350" height="350" alt="weather" />
        <a href="https://github.com/jpls218/React_Employee_Directory.git"><button type="button" className="btn btn-primary">Github</button></a>
        <a href="https://jpls218.github.io/React_Employee_Directory/"><button type="button" className="btn btn-primary">Link</button></a>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
