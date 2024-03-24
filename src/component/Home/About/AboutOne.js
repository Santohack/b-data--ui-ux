 import React from 'react'

//  Import Img
 import check from '../../../assets/img/about/tick.png'
 import AboutImg from '../../../assets/img/about/1.svg'

 import { Link } from 'react-router-dom';
 
 const AboutOne=()=> {
  return (
   <>
   {/* About One Area Start */}
     <section id="about" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="left-side-title">
                        <h3>About Company</h3>
                        <h2 className="pt10">
                        We Provide Real Time Data Solutions, Case Study , Analytics And Designs

                        </h2>
                    </div>
                    <div className="about-details pt10">
                        <p>
                        From in-depth user research and intuitive interface design to rigorous usability testing and accessibility audits, our unique selling proposition lies in our ability to deliver holistic solutions that prioritize both user satisfaction and business objectives.

                        </p>
                        <ul className="pt20">
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img alt="" src={check}  />Various Analysis Options
                            </li>
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img alt="" src={check}  />Professional Consultancy Service
                            </li>
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img alt="" src={check}  />Advanced Advisory Team
                            </li>
                            <li className="wow zoomIn" data-wow-duration="2.0s">
                                <img alt="" src={check}  />24/7 Support Centers
                            </li>
                        </ul>
                        {/* <Link to="/#" className="btn btn-theme mt30">How It Work</Link> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="animation-img animation-img-one">
                        <img alt="" src={AboutImg}  />
                    </div>
                </div>
            </div>
        </div>
    </section>
       {/* About One Area End */}
   </>

  )
 }
 
 export default AboutOne
 