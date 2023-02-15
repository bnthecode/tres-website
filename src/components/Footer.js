import React from "react";
const Footer = (props) => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {/* // COMMENT: this is only checking to make sure that the resumeData object is there before it tries
             // to iterate over the data (resume.socialLinks)  LINE 10 */}
            {props.resumeData.socialLinks &&
              props.resumeData.socialLinks.map((item) => {
                return (
                  <li>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};
// COMMENT: always export the name of your component or you will not be able to use it anywhere else
// when you export you are able to then say import Component from (../ComponentName.js); in other files
export default Footer;
