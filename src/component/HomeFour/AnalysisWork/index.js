import React from "react";
import img from "../../../assets/img/about.png";
import img1 from "../../../assets/img/1.png";
import img2 from "../../../assets/img/2.png";
import img3 from "../../../assets/img/3.png";

const AnalysisWork = () => {
  return (
    <>
      <section id="about" className="py100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about-tabs ">
                <img src={img} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about-right-side-tabs">
                <div className="tabs-heading">
                  <h2>How Data Analysis Work</h2>
                  <p>
                    Dolor sit amet consectetur elit sed eiusmod tempor incidi
                    dunt labore dolore magna aliqua enim.
                  </p>
                </div>
                <div className="tabs-about-button">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="about-tab"
                        data-toggle="tab"
                        href="#about-1"
                        role="tab"
                        aria-controls="about"
                        aria-selected="true"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="mission-tab"
                        data-toggle="tab"
                        href="#mission"
                        role="tab"
                        aria-controls="mission"
                        aria-selected="false"
                      >
                        Our Mission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="vision-tab"
                        data-toggle="tab"
                        href="#vision"
                        role="tab"
                        aria-controls="vision"
                        aria-selected="false"
                      >
                        Our Vision
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="about-1"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <p>
                      Dolor sit amet consectetur elit sed eiusmod tempor incidi
                      dunt labore dolore magna aliqua enim ad minim veniam quis
                      nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <ul>
                      <li>
                        <img src={img1} alt="imgClient" />
                        Data results predicts the growth and lose
                      </li>
                      <li>
                        <img src={img2} alt="iimgClientmg" />
                        Data results predicts the growth and lose
                      </li>
                      <li>
                        <img src={img3} alt="imgClient" />
                        Data results predicts the growth and lose
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mission"
                    role="tabpanel"
                    aria-labelledby="mission-tab"
                  >
                    <p>
                      Dolor sit amet consectetur elit sed eiusmod tempor incidi
                      dunt labore dolore magna aliqua enim ad minim veniam quis
                      nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <ul>
                      <li>
                        <img src={img1} alt="img" />
                        Data results predicts the growth and lose
                      </li>
                      <li>
                        <img src={img2} alt="img" />
                        Data results predicts the growth and lose
                      </li>
                      <li>
                        <img src={img3} alt="img" />
                        Data results predicts the growth and lose
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="vision"
                    role="tabpanel"
                    aria-labelledby="vision-tab"
                  >
                    <p>
                      Dolor sit amet consectetur elit sed eiusmod tempor incidi
                      dunt labore dolore magna aliqua enim ad minim veniam quis
                      nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <ul>
                      <li>
                        <img src={img1} alt="img" />
                        Data results predicts the growth and lose
                      </li>
                      <li>
                        <img src={img2} alt="img" />
                        Data results predicts the growth and lose
                      </li>
                      <li>
                        <img src={img3} alt="img" />
                        Data results predicts the growth and lose
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalysisWork;
