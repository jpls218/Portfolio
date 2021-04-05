import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";
import "./style.css";

class Background extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div> 
        <ParticlesBg num={200} type="circle" bg={true} />
      </div>
    );
  }
}

render(<Background />, document.getElementById("root"));

export default Background;