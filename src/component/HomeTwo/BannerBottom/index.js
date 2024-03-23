import React from 'react'
import {BottomData} from './BannerBottomData';
import BannerCard from './BannerCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowForward } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';
const BannerBottom = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight/>,
        prevArrow: <SlickArrowLeft/>,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
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
    <section id="banner_bottom" className="py100">
   <div className="container">
    <Slider {...settings}>
        {BottomData.map((data, index)=>(
        <BannerCard svg={data.svg} heading={data.heading} para={data.para} key={index} />
        ))}
    </Slider> 
   </div>
 </section>   
        </>
    )
}

export default BannerBottom
