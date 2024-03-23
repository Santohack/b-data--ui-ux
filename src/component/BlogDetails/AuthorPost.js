import React from 'react'
// Import Icon
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
// Import Img
import img1 from '../../assets/img/comment/1.png'

const AuthorPost = () => {
    return (
        <>
            {/* Media Area Start */}
            <li className="media">
                <div className="media-img">
                    <img alt="" src={img1} />
                </div>
                <div className="media-body">
                    <div className="media-header">
                        <div className="media-name">
                            <h4>Aysha Rane</h4>
                            <p>Post author</p>
                        </div>
                        <div className="post-share"><a href="#!" className="social-icon"><i><FaFacebookF/></i></a>
                            <a href="#!" className="social-icon"><i><AiOutlineTwitter/></i></a>
                        </div>
                    </div>
                    <div className="media-paragraph">
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at. turpis.
                        </p>
                    </div>
                </div>
            </li>
            {/* Media Area Start */}
        </>
    )
}

export default AuthorPost
