import React from 'react'

// Import Icon
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";
import {AiOutlineBehance} from "react-icons/ai";

const TeamCard = (props) => {
    return (
        <>
            {/* Team Card Start */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="titem text-center responsive-mt-30">
                    <div className="team-img">
                        <img src={props.data.img} alt="imf"/>
                        <div className="social valign">
                            <div className="full-width">
                                <a href="#!" className="icon">
                                    <i><FaFacebookF/></i>
                                </a>
                                <a href="#!" className="icon">
                                    <i><AiOutlineTwitter/></i>
                                </a>
                                <a href="#!" className="icon">
                                    <i><FaPinterestP/></i>
                                </a>
                                <a href="#!" className="icon">
                                    <i><AiOutlineBehance/></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="team-text">
                        <h3>{props.data.name}</h3>
                        <p>{props.data.title}</p>
                    </div>
                </div>
            </div>
            {/* Team Card End */}
        </>
    )
}

export default TeamCard
