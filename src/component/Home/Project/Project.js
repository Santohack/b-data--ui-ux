import React from "react";
import img1 from "../../../assets/img/recent-work/1.png";
import img2 from "../../../assets/img/recent-work/2.png";
import img4 from "../../../assets/img/recent-work/4.png";
import img5 from "../../../assets/img/recent-work/5.png";
import Masonry from "react-masonry-css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Project = (props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <section id="recent-work" className="py100 bg-color">
        <div className=" container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="left-side-title">
                <h3>Recent Projects</h3>
                <h2 className="pt10">
                  Check Some of Our Recent Successful Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                <div className="work-item">
                  <img
                    alt=""
                    src="https://img.freepik.com/premium-vector/abstract-technical-drawing-blueprint-with-gear-cogs-mechanical-engineering-tech_461812-509.jpg"
                  />
                  <div className="overlay-arae">
                    <span className="overlay-text">
                      UX Design for Mechanical Engineering Processes @ Covestro
                    </span>
                  </div>
                </div>
                <div className="work-item">
                  <img
                    alt=""
                    src="https://cloudhpc.cloud/wp-content/uploads/2023/12/4c5d31df04ad4f34d90b52af4d968729QHtt0LfeDzGkx4Xr-16-removebg-preview-1-edited.png"
                  />
                  <div className="overlay-arae">
                    <span className="overlay-text">
                      UI/UX Design for Safety Simulation <br /> @ Indian Oil
                      Corporation
                    </span>
                  </div>
                </div>
                <div className="work-item">
                  <img
                    alt=""
                    src="https://images.squarespace-cdn.com/content/v1/60d9cb21964164103233a604/b27cf0c7-f975-4457-a786-53679ffd623a/Benefitsbg.png"
                  />
                  <div className="overlay-arae">
                    <span className="overlay-text">
                      UX Design for Digital Twin @ Mac N Hom
                    </span>
                  </div>
                </div>
                <div className="work-item">
                  <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIpZlBwnbTXOWT1SDLiARO3Y8QkvI9Pn6i6LG8ra2YQ&s"
                  />
                  <div className="overlay-arae">
                    <span className="overlay-text">
                      UX/UI Design for FinTech AI System @ Cognicor
                    </span>
                  </div>
                </div>
                <div className="work-item">
                  <img
                    alt=""
                    src="https://www.computationalfluiddynamics.com.au/wp-content/uploads/2015/08/ansys-icepak-1-bg.jpg"
                  />
                  <div className="overlay-arae">
                    <span className="overlay-text">
                      UX/UI Design for CFD Visualization @ Panasonic
                    </span>
                  </div>
                </div>
                <div className="work-item">
                  <img
                    alt=""
                    src="https://hnluccls.files.wordpress.com/2021/10/bg.png"
                  />
                  <div className="overlay-arae">
                    <span className="overlay-text" >
                      UX/UI Design for Virtual Training @ Federal Bank
                    </span>
                  </div>
                </div>
              </Masonry>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
