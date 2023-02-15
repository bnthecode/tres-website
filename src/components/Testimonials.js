import React from "react";
const Testimonials = (props) => {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                {/* // COMMENT: this is only checking to make sure that the resumeData object is there before it tries
             // to iterate over the data (resume.socialLinks)  LINE 17 */}
                {props.resumeData.testimonials &&
                  props.resumeData.testimonials.map((item) => {
                    return (
                      <li>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul>
            </div>{" "}
            {/* div.flexslider ends */}
          </div>{" "}
          {/* div.flex-container ends */}
        </div>{" "}
        {/* row ends */}
      </div>{" "}
      {/* text-container ends */}
    </section>
  );
};
// COMMENT: always export the name of your component or you will not be able to use it anywhere else
// when you export you are able to then say import Component from (../ComponentName.js); in other files
export default Testimonials;
