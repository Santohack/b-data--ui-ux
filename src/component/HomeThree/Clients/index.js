import React from "react";
import SectionHeading from "../../Common/SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { ClientsData } from "./ClientData";
import ClientsCard from "./ClientsCard";

const OurClient = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <MdArrowBack
      color="#5b6fe6"
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
    />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <MdArrowForward
      color="#5b6fe6"
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
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="home5-testimonials" className="py100">
        <div className="container">
          <SectionHeading
            heading="Clients Testimonials"
            para="Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          />
          <div className="">
            <Slider {...settings}>
              {ClientsData.map((data, index) => (
                <ClientsCard
                  para={data.para}
                  img={data.img}
                  name={data.name}
                  des={data.des}
                  key={index}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClient;
