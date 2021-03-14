import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

function Contact() {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/jpls218/Portfolio/main/public/images/IMG_6700.jpeg">
        <h1>Please Reach Out if You Have Any Questions</h1>
        <h2>Contact Information</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        
        <Row>
          <Col size="md-12">
          <p>Email: <a href="mailto:jpls218@gmail.com">jpls218@gmail.com</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/jonathan-smith-9498781ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfhtgPGeeQWqb2qLmP0iWPA%3D%3D" target="_blank">www.linkedin.com/in/jonathan-smith-9498781ba</a></p>
          <p>GitHub: <a href="https://github.com/jpls218" target="_blank">https://github.com/jpls218</a></p>
          <p>Resume: <a href="https://docs.google.com/document/d/1X9ed0KUQTyIMgMSM8eodq-i9QC9-AJBn3UlyKYjr2oY/edit?usp=sharing">Here</a></p>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;