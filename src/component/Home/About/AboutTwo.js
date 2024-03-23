import React from 'react'
// Import Img
import small1 from '../../../assets/img/small-icon/1.png'
import small2 from '../../../assets/img/small-icon/2.png'
import small3 from '../../../assets/img/small-icon/3.png'
import AboutImg from '../../../assets/img/about/2.png'

const AboutTwo=({className=""})=> {
 return (
  <>
  {/* About Two Area Start */}
     <section id="about-area-two" className={`${className}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="animation-img animation-img-one">
                        <img alt="" src={AboutImg} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-side-about">
                        <h2>Check Our Awesome Features Here</h2>
                        <div className="right-area-about-list">
                            <div className="media">
                                <img alt="" className="mr-3" src={small1} />
                                <div className="media-body">
                                    <h3 className="mt-0">Save Your Time</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                            <div className="media  media wow fadeInUp " data-wow-duration="2.0s " data-wow-delay=".2s ">
                                <img alt="" className="mr-3 " src={small2} />
                                <div className="media-body ">
                                    <h3 className="mt-0 ">Manage Business Easily</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                            <div className="media  media wow fadeInUp" data-wow-duration="2.0s" data-wow-delay=".3s">
                                <img alt="" className="mr-3" src={small3} />
                                <div className="media-body">
                                    <h3 className="mt-0">Trusted Partner</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      {/* About Two Area End */}
  </>
 )
}

export default AboutTwo
