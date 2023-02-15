import React from "react";
const Resume = (props) => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {props.resumeData &&
            props.resumeData.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {/* // COMMENT: this is only checking to make sure that the resumeData object is there before it tries
             // to iterate over the data (resume.socialLinks)  LINE 43 */}
          {props.resumeData.work &&
            props.resumeData.work.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{props.resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {props.resumeData.skills &&
                props.resumeData.skills.map((item) => {
                  return (
                    <li>
                      <span
                        className={`bar-expand ${item.skillname.toLowerCase()}`}
                      />
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
// COMMENT: always export the name of your component or you will not be able to use it anywhere else
// when you export you are able to then say import Component from (../ComponentName.js); in other files
export default Resume;
