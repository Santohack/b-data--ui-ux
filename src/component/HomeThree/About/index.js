import React from "react";
// Import Img
import img from '../../../assets/img/home4/about.png'
import img2 from '../../../assets/img/home-two-data/1.png'
import svg1 from "../../../assets/img/svg/settings.svg";
import svg2 from "../../../assets/img/svg/testing.svg";
import svg3 from "../../../assets/img/svg/template.svg";
import svg4 from "../../../assets/img/svg/edit-tools.svg";
import svg5 from "../../../assets/img/svg/user-experience.svg";
import svg6 from "../../../assets/img/svg/responsive.svg";
import check from "../../../assets/img/home-two-data/1.jpg";
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <>
      <section id="about-us-area-home4" className="py100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home4-about-img">
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
                  suscipit arcu. Quisque aliquam posuere tortor,.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="home4-about-list">
                      <ul>
                        <li>
                          <img src={svg1} alt="img" />
                          Fully Responsive
                        </li>
                        <li>
                          <img src={svg2} alt="img" />
                          Multi-Device Testing
                        </li>
                        <li>
                          <img src={svg3} alt="img" />
                          Creative Layout
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="home4-about-list">
                      <ul>
                        <li>
                          <img src={svg4} alt="img" />
                          Clean & Modern Design
                        </li>
                        <li>
                          <img src={svg5} alt="img"/>
                          Great User Experience
                        </li>
                        <li>
                          <img src={svg6} alt="img" />
                          100% Fully Responsive
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
          <div className="row  align-items-center ">
            <div className="col-lg-6  col-md-12 col-sm-12 col-12 pt60">
              <div className="data-science-text">
                <div className="left-side-title">
                  <h2 className="pt10">
                    Easily Manage Your Business Using Data Science
                  </h2>
                </div>
                <div className="data-science-content">
                  <p>
                    Dolor sit amet consectetur elit sed eiusmod tempor incidi
                    dunt labore dolore magna aliqua enim ad minim veniam quis
                    nostrud exercitation ullamco laboris nisi ut.
                  </p>
                  <ul className="data-check-arae">
                    <li>
                      <img src={check} alt="check" />
                      Various Analysis Options
                    </li>
                    <li>
                      <img src={check} alt="check" />
                      Professional Consultancy Service
                    </li>
                    <li>
                      <img src={check} alt="check" />
                      Advanced Advisory Team
                    </li>
                    <li>
                      <img src={check} alt="check" />
                      24/7 Support Center
                    </li>
                  </ul>
                  <a href="#!" className="btn btn-theme">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-md-12 col-sm-12 col-12 pt60">
              <div className="data-since-img">
              <Tilt>
                <img src={img2} alt="img" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
