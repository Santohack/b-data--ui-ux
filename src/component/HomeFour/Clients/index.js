import React, {useState} from "react";
import img from "../../../assets/img/home-two-testimonial/veido-test.png";
import img1 from "../../../assets/img/client/clients_img_1.jpg";
import img2 from "../../../assets/img/client/clients_img_2.jpg";
import img3 from "../../../assets/img/client/clients_img_3.jpg";
import img4 from "../../../assets/img/client/clients_img_4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowForward } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';
import { AiOutlinePlayCircle } from 'react-icons/ai';
// Modal 
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/css/modal-video.min.css'

const Clients = () => {
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
    const [isOpen, setOpen] = useState(false)
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
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };
  return (
    <>
      <section id="testimonial-area" className="py100 bg-color testimonial_padding">
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="testmonial-veido text-center">
                <img src={img} alt="img" />
                <div className="veido-play">
                  <ModalVideo channel='youtube' api={false} autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)}/>
                  <a href="#!" onClick={() => setOpen(true)}><i><AiOutlinePlayCircle /></i></a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="clients-review-slides">
                <Slider {...settings}> 
                <div className="row">
                  <div className="col-lg-3">
                    <div className="reviews-slider-img">
                      <img src={img1} alt="imgClient"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="review-slide-item">
                      <p>
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Odit temporibus eos soluta
                        eum magni, quibusdam optio consectetur, perspiciatis
                        possimus molestias similique voluptates recusandae
                        molestiae adipisci sed obcaecati quae! Autem, fugiat.
                      </p>
                      <h6 className="designation">
                        <span>Jayla Ayers -</span> CEO, DevignEdge
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="reviews-slider-img">
                      <img src={img2}  alt="imgClient"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="review-slide-item">
                      <p>
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Odit temporibus eos soluta
                        eum magni, quibusdam optio consectetur, perspiciatis
                        possimus molestias similique voluptates recusandae
                        molestiae adipisci sed obcaecati quae! Autem, fugiat.
                      </p>
                      <h6 className="designation">
                        <span>Jayla Ayers -</span> CEO, DevignEdge
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="reviews-slider-img">
                      <img src={img3} alt="imgClient"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="review-slide-item">
                      <p>
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Odit temporibus eos soluta
                        eum magni, quibusdam optio consectetur, perspiciatis
                        possimus molestias similique voluptates recusandae
                        molestiae adipisci sed obcaecati quae! Autem, fugiat.
                      </p>
                      <h6 className="designation">
                        <span>Jayla Ayers -</span> CEO, DevignEdge
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="reviews-slider-img">
                      <img src={img4} alt="imgClient"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="review-slide-item">
                      <p>
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Odit temporibus eos soluta
                        eum magni, quibusdam optio consectetur, perspiciatis
                        possimus molestias similique voluptates recusandae
                        molestiae adipisci sed obcaecati quae! Autem, fugiat.
                      </p>
                      <h6 className="designation">
                        <span>Jayla Ayers -</span> CEO, DevignEdge
                      </h6>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
