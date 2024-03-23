import React from 'react'
import Tilt from 'react-parallax-tilt';
import img from '../../../assets/img/about/1.png'
import feature1 from '../../../assets/img/svg/feature1.svg'
import feature2 from '../../../assets/img/svg/feature2.svg'
import feature3 from '../../../assets/img/svg/feature3.svg'

const Features = () => {
    return (
        <>
         <section id="core-area-home4"  className="py100 bg-color">
    <div className="container">
        <div className="row justify-content-center pb30">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="section-center-two text-center pb30">
                    <h2>Our Core Features</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                    </p>
                </div>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="core-img">
                    <Tilt>
                    <img src={img} alt="img" />
                    </Tilt>
                    
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="core-area-wrapper">
                    <div className="core-area-item">
                        <div className="core-icons">
                            <img src={feature1} alt="icon" />
                        </div>
                        <div className="core-items-text">
                            <h3><a href="#!">Measure The Customer Experience</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.</p>
                        </div>
                    </div>
                    <div className="core-area-item">
                        <div className="core-icons">
                            <img src={feature2} alt="icon" />
                        </div>
                        <div className="core-items-text">
                            <h3><a href="#!">Multi-Device Testing Made Simple</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.</p>
                        </div>
                    </div>
                    <div className="core-area-item">
                        <div className="core-icons">
                            <img src={feature3} alt="icon" />
                        </div>
                        <div className="core-items-text">
                            <h3><a href="#!">Launch Quickly With Reusable Templates</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
        </>
    )
}

export default Features
