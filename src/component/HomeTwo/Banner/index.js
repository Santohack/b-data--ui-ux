import React, { useState } from "react";
// Modal
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
// Icon
import { AiOutlinePlayCircle } from "react-icons/ai";

// Import Banner img
import img from '../../../assets/img/about/2.svg'

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="banner-four">
        <div className="bg-shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home-one-banner-content">
                <h1>Big Data & Analytics</h1>
                <h2>Innovative Solutions</h2>
                <p>
                  Real-time data management technologies, global data market
                  places, and award-winning service make our solutions.
                </p>
                <ModalVideo
                  channel="youtube"
                  api={false}
                  autoplay
                  isOpen={isOpen}
                  videoId="L61p2uyiMSo"
                  onClose={() => setOpen(false)}
                />
                <div className="banner-one-btn pt30">
                  <a
                    href="#!"
                    className="banner-video video-link"
                    onClick={() => setOpen(true)}
                  >
                    <AiOutlinePlayCircle /> Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="banner-img ">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
