import React from "react";
import img from '../../../assets/img/home5/about.png'
import { GoCheck } from 'react-icons/go';

const DataCompromise = () => {
  return (
    <>
      <section id="data-those" className="py100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="data-those-img animation-img-one">
                <img src={img} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data-those-texted">
                <div className="data-those-title">
                  <h2 className="color-white">
                    We don`t Compromise With the best Big Data Analytics
                  </h2>
                  <p className="color-white pt10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    vitae error perferendis dicta ducimus similique aperiam
                    nesciunt asperiores.
                  </p>
                </div>
                <div className="data-those-inner-text">
                  <div className="data-those-inner-box">
                    <div className="icon-font-box">
                    <i><GoCheck/></i>
                    </div>
                    <h3>
                      <a href="#!" className="color-white">
                        Powerfull Mobile And Online App
                      </a>
                    </h3>
                    <p className="color-white">
                      Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                      elit alias officia aperiam.
                    </p>
                  </div>
                  <div className="data-those-inner-box">
                    <div className="icon-font-box">
                      <i><GoCheck/></i>
                    </div>
                    <h3>
                      <a href="#!" className="color-white">
                        Brings More Transparency And Speed
                      </a>
                    </h3>
                    <p className="color-white">
                      Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                      elit alias officia aperiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCompromise;
