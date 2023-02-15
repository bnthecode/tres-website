import React from "react";
const Header = (props) => {
  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              I am {props.resumeData.name}
            </h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              {" "}
              {props.resumeData.role}
              {props.resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {/* // COMMENT: this is only checking to make sure that the resumeData object is there before it tries
             // to iterate over the data (resume.socialLinks)  LINE 55 */}
              {props.resumeData.socialLinks &&
                props.resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};
// COMMENT: always export the name of your component or you will not be able to use it anywhere else
// when you export you are able to then say import Component from (../ComponentName.js); in other files
export default Header;
