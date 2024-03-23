import React from "react";
import Tilt from 'react-parallax-tilt';
import img from "../../../assets/img/home4/about.png";
import svg1 from "../../../assets/img/svg/settings.svg";
import svg2 from "../../../assets/img/svg/testing.svg";
import svg3 from "../../../assets/img/svg/template.svg";
import svg4 from "../../../assets/img/svg/edit-tools.svg";
import svg5 from "../../../assets/img/svg/user-experience.svg";
import svg6 from "../../../assets/img/svg/responsive.svg";
const About = () => {
  return (
    <>
      <section id="about-us-area-home4" className="py100 bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home4-about-img ">
              <Tilt>
                <img src={img} alt="img" />
                </Tilt>
              </div>
            </div>
            <div className="col-lg-6  col-md-12 col-sm-12 col-12">
              <div className="who-we-contant">
                <h2>
                  Build Your Targeted Audience using Data Science in minutes.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at dictum risus, non suscipit arcu. Quisque aliquam posuere
                  tortor, sit amet convallis nunc scelerisque in ipsum dolor sit
                  amet, consectetur adipiscing elit. Duis at dictum risus, non
                  suscipit arcu. Quisque aliquam posuere tortor.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="home4-about-list">
                      <ul>
                        <li>
                          <img src={svg1} alt="img" /> Fully Responsive
                        </li>
                        <li>
                          <img src={svg2} alt="img" /> Multi-Device Testing
                        </li>
                        <li>
                          <img src={svg3} alt="img" /> Creative Layout
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="home4-about-list">
                      <ul>
                        <li>
                          <img src={svg4} alt="img" /> Clean & Modern Design
                        </li>
                        <li>
                          <img src={svg5} alt="img" /> Great User Experience
                        </li>
                        <li>
                          <img src={svg6} alt="img" /> 100% Fully Responsive
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a href="#!" className="btn btn-theme pt30">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
