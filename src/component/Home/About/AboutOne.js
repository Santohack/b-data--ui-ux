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
                            We Provide Real Time Data Solutions, Analysis, Analytics And Prediction
                        </h2>
                    </div>
                    <div className="about-details pt10">
                        <p>
                            Dolor sit amet consectetur elit sed eiusmod tempor incidi dunt labore dolore magna aliqua
                            enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.
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
                        <Link to="/#" className="btn btn-theme mt30">How It Work</Link>
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
 