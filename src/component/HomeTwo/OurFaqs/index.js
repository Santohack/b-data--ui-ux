import React from "react";
// Import Section Heading
import SectionHeading from '../../../component/Common/SectionHeading'
// Import Img
import img from '../../../assets/img/about/1.png'
import Tilt from 'react-parallax-tilt';

const Frequently_Questions = ({className = ''}) => {
  return (
    <>
      <section id="faqs-area-home4" className={`py100 ${className}` }>
        <div className="container">
        <SectionHeading para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo" heading="Frequently Questions" />
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="faqs-home4-img">
              <Tilt>
                <img src={img} alt="img" />
                </Tilt>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="tab-pane" role="tabpanel">
                <div className="faqs-items">
                  <div className="accordion-wrapper">
                    <div id="accordion5">
                      <div className="card mb20">
                        <div
                          className="card-header box-shadow"
                          id="headingone1"
                        >
                          <h5 className="mb-0">
                            <a
                              href="#!"
                              className="collapsed "
                              role="button"
                              data-toggle="collapse"
                              data-target="#collapseone1"
                              aria-expanded="false"
                              aria-controls="collapseone1"
                            >
                              What is the best features and services of Big
                              Data?
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseone1"
                          className="collapse"
                          aria-labelledby="headingone1"
                          data-parent="#accordion5"
                        >
                          <div className="card-body active">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dolore omnis quaerat nostrum,
                              pariatur ipsam sunt accusams enim necessitatibus
                              est fugiat, assumenda dolorem, deleniti corrupti
                              cupiditate ipsum, dolorum voluptatum esse error?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb20">
                        <div
                          className="card-header box-shadow"
                          id="headingtwo1"
                        >
                          <h5 className="mb-0">
                            <a
                              href="#!"
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-target="#collapsetwo1"
                              aria-expanded="false"
                              aria-controls="collapsetwo1"
                            >
                              What is the benefit of Data Science?
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapsetwo1"
                          className="collapse"
                          aria-labelledby="headingtwo1"
                          data-parent="#accordion5"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dolore omnis quaerat nostrum,
                              pariatur ipsam sunt accusams enim necessitatibus
                              est fugiat, assumenda dolorem, deleniti corrupti
                              cupiditate ipsum, dolorum voluptatum esse error?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb20">
                        <div
                          className="card-header box-shadow"
                          id="headingthree1"
                        >
                          <h5 className="mb-0">
                            <a
                              href="#!"
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-target="#collapsethree1"
                              aria-expanded="false"
                              aria-controls="collapsethree1"
                            >
                              Can i have multiple activities in single feature?
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapsethree1"
                          className="collapse"
                          aria-labelledby="headingthree1"
                          data-parent="#accordion5"
                        >
                          <div className="card-body">
                            <p>
                              If you are using Ubuntu 18.04, instead of
                              installing each component separately, use Tasksel
                              to install a LAMP stack on your Linode. When
                              Tasksel completes, skip the installation steps in
                              each section below and continue.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Frequently_Questions;
