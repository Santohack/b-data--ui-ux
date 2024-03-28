import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

const CopyRight = () => {
    return (
        <>
            <div className="copy-right">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="copy-text">
                                <p>Raycast System © 2024. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="copy-icon text-lg-right">
                                <ul>
                                    <li><a href="#!"><i><FaFacebookF/></i></a></li>
                                    <li><a href="#!"><i><AiOutlineTwitter/></i></a></li>
                                    <li><a href="#!"><i><FaLinkedinIn/></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CopyRight
