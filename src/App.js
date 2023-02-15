import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
const App = () => {
  // TRES ---> I added comments to every component to outline some of the items that might be confusing
  // I also removed the addional props from the Header Component <Header></Header> on line 17 to prevent confusion
  // I added one example of props to the <Portfolio></Portfolio> Component
  // newProp={whateverValueYouWant}
  // prop name   prop value
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio
        resumeData={resumeData}
        yourCustomText="Check out some of my works."
      />
      <Testimonials resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
};

export default App;
