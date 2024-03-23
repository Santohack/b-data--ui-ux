import React from "react";
import img from '../../../assets/img/about/2.png'
import Tilt from 'react-parallax-tilt';

const How_It_Work = () => {
  return (
    <>
      <section id="how-it-work-home4" className="py100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="how-it-works-wrappers">
                <div className="how-it-wors-title">
                  <h5>HOW IT WORKS</h5>
                  <h2>How B-Bata Works?</h2>
                  <p>
                    Dolor sit amet consectetur elit sed eiusmod tempor incidi
                    dunt labore dolore magna aliqua enim ad minim veniam quis
                    nostrud.
                  </p>
                </div>
                <div className="how-it-inner-boxed">
                  <div className="how-it-single-item">
                    <div className="how-it-count-box">1</div>
                    <div className="how-items-texed">
                      <h3>
                        <a href="#!">Data for All Your People</a>
                      </h3>
                      <p>
                        Dolor sit amet consectetur elit eiusmod tempor incidi
                        dunt labore dolore magna aliqua enim.
                      </p>
                    </div>
                  </div>
                  <div className="how-it-single-item">
                    <div className="how-it-count-box">2</div>
                    <div className="how-items-texed">
                      <h3>
                        <a href="#!">A New Breed of AI</a>
                      </h3>
                      <p>
                        Dolor sit amet consectetur elit eiusmod tempor incidi
                        dunt labore dolore magna aliqua enim.
                      </p>
                    </div>
                  </div>
                  <div className="how-it-single-item">
                    <div className="how-it-count-box">3</div>
                    <div className="how-items-texed">
                      <h3>
                        <a href="#!">Analytics Businesse</a>
                      </h3>
                      <p>
                        Dolor sit amet consectetur elit eiusmod tempor incidi
                        dunt labore dolore magna aliqua enim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="how-it-works-imgs">
                <div className="anitmation-img">
                  <Tilt> 
                  <img src={img} alt="img" />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default How_It_Work;
