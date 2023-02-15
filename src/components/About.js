import React from "react";
const About = (props) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{props.resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{props.resumeData.name}</span>
                <br />
                <span>{props.resumeData.address}</span>
                <br />
                <span>{props.resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// COMMENT: always export the name of your component or you will not be able to use it anywhere else
// when you export you are able to then say import Component from (../ComponentName.js); in other files
export default About;
