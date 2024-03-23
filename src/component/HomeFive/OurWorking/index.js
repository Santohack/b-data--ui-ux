import React from 'react'
import SectionHeading from '../../Home/SectionHeading/SectionHeading'
import img from '../../../assets/img/recent-three.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowForward } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';

const WorkingProcessTwo = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <MdArrowBack color="#5b6fe6"
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
        />
      );
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <MdArrowForward color="#5b6fe6"
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
      />
      );
    let settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowLeft/>,
        prevArrow: <SlickArrowRight/>,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                nextArrow:false,
                prevArrow:false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                nextArrow:false,
                prevArrow:false,
                dots: true
              }
            }
          ]
      };
    return (
        <>

<section id="recent-work-three" className="py100">
        <div className=" container-fluid">
        <SectionHeading title="Our Working Process" heading={"Data Science Solutions For Startup"}/>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="recent-wrapper">
                <Slider {...settings}>
                    <div className="area-flexed" style={{display:"block"}}>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="recent-img-three">
                                <img src={img} alt="img" />
                                <h3 className="pulse-arae">1</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="recent-work-slider-area">
                                <div className="left-side-recent">
                                    <h3 className="pt10">
                                        Check Some of Our Recent Successful Projects
                                    </h3>
                                </div>
                                <div className="recent-text-area">
                                    <div className="recent-slider-text">
                                        <p>Dolor sit amet consectetur elit sed eiusmod tempor inc idi dunt labore dolore
                                            magna aliqua enim ad minim ve niam quis nostrud exercitation ullamco ut.</p>
                                        <p>Dolor sit amet consectetur elit sed eiusmod tempor inc idi dunt labore dolore
                                            magna aliqua enim.</p>
                                        <a className="btn btn-theme" href="#!">
                                            View Case Study
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="area-flexed" style={{display:"block"}}>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="recent-img-three">
                                <img src={img} alt="img" />
                                <h3 className="pulse-arae">2</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="recent-work-slider-area">
                                <div className="left-side-recent">
                                    <h3 className="pt10">
                                        Check Some of Our Recent Successful Projects
                                    </h3>
                                </div>
                                <div className="recent-text-area">
                                    <div className="recent-slider-text">
                                        <p>Dolor sit amet consectetur elit sed eiusmod tempor inc idi dunt labore dolore
                                            magna aliqua enim ad minim ve niam quis nostrud exercitation ullamco ut.</p>
                                        <p>Dolor sit amet consectetur elit sed eiusmod tempor inc idi dunt labore dolore
                                            magna aliqua enim.</p>
                                        <a className="btn btn-theme" href="#!">
                                        View Case Study
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default WorkingProcessTwo
