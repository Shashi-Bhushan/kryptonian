import React from "react";
import { Message } from "semantic-ui-react";

class AboutMe extends React.Component {
  private static points = [
    "Java and Kotlin developer",
    "Experienced Web developer with a demonstrated history of high quality client deliverable in the IT sector",

  ];

  render() {
    return (
      <div>
        <Message header={"Shashi Bhushan"} list={AboutMe.points} />

        <a href={"https://github.com/Shashi-Bhushan/"}>Github</a> | &nbsp;
        <a href={"https://www.linkedin.com/in/shashi-bhushan-98753ba8/"}>Linkedin</a>
      </div>
    );
  }
}

export default AboutMe;
