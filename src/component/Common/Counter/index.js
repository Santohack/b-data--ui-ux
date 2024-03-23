import React from 'react'
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import {BiCodeAlt} from "react-icons/bi";
import {FaAward} from "react-icons/fa";
import CountUp from 'react-countup';

const Index = () => {
    return (
        <>
            <section id="counter-area" className="py100 bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="counter-area">
                                <div className="counter-icon">
                                    <i><AiOutlineUsergroupAdd/></i>
                                </div>
                                <div className="counter-body">
                                    <h2 className="counter"><CountUp end={3500}/></h2>
                                    <h4>My Client</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="counter-area responsive-md">
                                <div className="counter-icon">
                                    <i><BiCodeAlt/></i>
                                </div>
                                <div className="counter-body">
                                    <h2 className="counter"><CountUp end={350}/></h2>
                                    <h4>Project Complete</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="counter-area responsive-sm">
                                <div className="counter-icon">
                                    <i><FaAward/></i>
                                </div>
                                <div className="counter-body">
                                    <h2 className="counter"><CountUp end={500}/></h2>
                                    <h4>Award</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index
