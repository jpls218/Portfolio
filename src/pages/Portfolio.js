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
          <img id="pic" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Weather_Dashboard.jpeg" width="350" height="350" alt="weather" />
          <a id="links" href="https://github.com/jpls218/WeatherReport.git" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Github</button></a>
          <a id="links" href="https://jpls218.github.io/WeatherReport/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
          <Col size="md-4">
          <u>battleNodes (group project!)</u>
          <img id="pic" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/battleNodes.jpeg" width="350" height="350" alt="battlenodes" />
          <a id="links" href="https://github.com/CastroAlejandro/whos-your-data.git" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Github</button></a>
          <a id="links" href="https://protected-beach-35913.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
          <Col size="md-4">
          <u>Workday Schedule</u>
          <img id="pic" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Workday_Schedule.jpeg" width="350" height="350" alt="weather" />
          <a id="links" href="https://github.com/jpls218/WorkDaySchedule.git" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Github</button></a>
          <a id="links" href="https://jpls218.github.io/WorkDaySchedule/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
          <u>Eat-Da-Burger!</u>
          <img id="pic" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Eat-Da-Burger.jpeg" width="350" height="350" alt="weather" />
          <a id="links" href="https://github.com/jpls218/Burgers_Node_Express.git" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Github</button></a>
          <a id="links" href="https://jpls218.github.io/Burgers_Node_Express/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
          <Col size="md-4">
          <u>Password Generator</u>
          <img id="pic" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Password_Generator.jpeg" width="350" height="350" alt="weather" />
          <a id="links" href="https://github.com/jpls218/Password_Generator.git" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Github</button></a>
          <a id="links" href="https://jpls218.github.io/Password_Generator/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
          <Col size="md-4">
          <u>Employee Directory</u>
          <img id="pic" className="img-thumbnail" src="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/Employee_Directory.jpeg" width="350" height="350" alt="weather" />
          <a id="links" href="https://github.com/jpls218/React_Employee_Directory.git" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Github</button></a>
          <a id="links" href="https://jpls218.github.io/React_Employee_Directory/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-primary">Link</button></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
