import React from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai";
import SideBar from '../ProjectDetails/Sidebar'
import img1 from "../../assets/img/project-details/1.jpg"
import img2 from "../../assets/img/project-details/2.png"

const SingleProject = () => {
    return (
        <>
            <section id="project-details-area" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="project-desc">
                                <div className="project-details-text">
                                    <img alt="" src={img1} />
                                    <h3>Project Description</h3>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                        the end
                                        of the day, going forward, a new normal that has evolved from generation X is on
                                        the
                                        runway heading towards a streamlined cloud solution.
                                        User generated content in real-time will have multiple touchpoints for
                                        offshoring.
                                        Capitalize on low hanging fruit to identify a ballpark value added activity to
                                        beta
                                        test. Override the digital divide with additional clickthroughs
                                        from DevOps.</p>
                                    <blockquote className="box-shadow">
                                        A new normal that has evolved from generation X is on the runway heading towards
                                        a
                                        streamlined cloud solution. User generated content in real-time will have
                                        multiple
                                        touchpoints for offshoring. Capitalize on low hanging fruit to identify a
                                        ballpark value
                                        added activity to beta test.
                                    </blockquote>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                        the end
                                        of the day, going forward, a new normal that has evolved from generation X is on
                                        the
                                        runway heading towards a streamlined cloud solution.
                                        User generated content in real-time will have multiple touchpoints for
                                        offshoring. </p>
                                </div>
                                <div className="project-details-bottom">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="pro-des-img">
                                                <img alt="" src={img2} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="pro-deta-list">
                                                <ul>
                                                    <li><i><AiOutlineCheckCircle/></i> Yoga europan lingues es membres.
                                                    </li>
                                                    <li><i><AiOutlineCheckCircle/></i> Run fast familie lor separat.
                                                    </li>
                                                    <li><i><AiOutlineCheckCircle/></i> Best gym un myth por.</li>
                                                    <li><i><AiOutlineCheckCircle/></i> Scientie musica sport etc li.
                                                    </li>
                                                    <li><i><AiOutlineCheckCircle/></i> Vocabularium li lingues differe
                                                        solmen.
                                                    </li>
                                                    <li><i><AiOutlineCheckCircle/></i> Come here grammatica li
                                                        pronunciation.
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProject
