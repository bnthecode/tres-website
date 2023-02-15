import React from "react";
const Porfolio = (props) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{props.yourCustomText}</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {/* // COMMENT: this is only checking to make sure that the resumeData object is there before it tries
             // to iterate over the data (resume.socialLinks)  LINE 14 */}
            {props.resumeData.portfolio &&
              props.resumeData.portfolio.map((item) => {
                return (
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-01">
                        <img
                          alt="somecrap"
                          src={`${item.imgurl}`}
                          className="item-img"
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

// COMMENT: always export the name of your component or you will not be able to use it anywhere else
// when you export you are able to then say import Component from (../ComponentName.js); in other files
export default Porfolio;
