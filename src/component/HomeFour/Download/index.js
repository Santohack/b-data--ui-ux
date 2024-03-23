import React from "react";
import img from "../../../assets/img/shape-phone.png";
import img2 from "../../../assets/img/phone.png";
import app from "../../../assets/img/app-store.png";
import google from "../../../assets/img/google-store.png";

const DownloadApp = ({ className = "" }) => {
  return (
    <>
      <section id="downloads-area" className={`py100 ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="downloads-phone-img">
                <img className="phone-bg" src={img} alt="img" />
                <img className="phone-animation" src={img2} alt="img" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="left-side-title">
                <h3>Download App Now</h3>
                <h2 className="pt10">Download Our App From App Store</h2>
              </div>
              <div className="downloads-text">
                <p>
                  Fermentum magna non faucibus dignissim. Sed a vene natis mi,
                  vel tempus neque. Fusce pharetra, diam in hendrerit facilisis,
                  enim diam cursus augue, egestas egestas purus diam at felis.
                </p>
                <div className="downloads-btn">
                  <a href="#!">
                    <img src={app} alt="img" />
                  </a>
                  <a href="#!">
                    <img src={google} alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
