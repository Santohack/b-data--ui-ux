import React, { useState } from "react";

// Modal
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";

// Import Banner Img
import img_banner from "../../../assets/img/about/1.svg";

// Icon
import { AiOutlinePlayCircle } from "react-icons/ai";

// Import React Dom
import { Link } from "react-router-dom";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      {/* Banner Start */}
      <section id="banner-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home-one-banner-content">
                <h1>UX Research & UI/UX Designing</h1>
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
                  <Link to="/#" className="btn btn-theme">
                    Get Started
                  </Link>
                  {/* <a
                    href="#!"
                    className="banner-video video-link"
                    onClick={() => setOpen(true)}
                  >
                    <AiOutlinePlayCircle /> Watch Video
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="banner-img">
                <img
                  alt=""
                  src={img_banner}
                  className="wow zoomIn"
                  data-wow-duration="2.0s"
                  data-wow-delay=".6s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner End */}
    </React.Fragment>
  );
};

export default Banner;
