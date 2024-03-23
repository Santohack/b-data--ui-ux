import React from "react";
import img from "../../../assets/img/home-two-banner/ban.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner-two-text">
                <h1>Collect, Analytics and Predict</h1>
                <p>
                  Real-time data management technologies, global data market
                  places, and award-winning service make our solutions.
                </p>
                <div className="banner-input">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-theme">Try for Free</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="bann-img">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
