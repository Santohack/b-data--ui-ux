import React from 'react'
import {ImLocation} from 'react-icons/im';
import {FiPhoneOutgoing} from 'react-icons/fi';
import {SiMinutemailer} from 'react-icons/si';
import {AiOutlineCheck} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="ps-informations">
                <h3>Project Details</h3>
                <ul>
                    <li><span><i><AiOutlineCheck/></i>Category:</span> Machine</li>
                    <li><span><i><AiOutlineCheck/></i>Client:</span> Alex Brons</li>
                    <li><span><i><AiOutlineCheck/></i>Location:</span> New York, USA</li>
                    <li><span><i><AiOutlineCheck/></i>Budget:</span> $75,000</li>
                    <li><span><i><AiOutlineCheck/></i>Completed:</span> 28 June, 2019</li>
                </ul>
            </div>
            <div className="company-info">
                <h3>Our Company Brochure</h3>
                <p>Impress clients new and existing with elite construction brochures. Impress clients new and
                    existing with elite construction.</p>
                <Link to="/#" className="btn btn-theme">Download PDF</Link>
            </div>
            <div className="contact-widget">
                <h3>Contact Us</h3>
                <ul>
                    <li>
                        <i> <ImLocation/></i> 205 Auburn Street, New York
                    </li>
                    <li>
                        <i><FiPhoneOutgoing/></i><Link to="/#">+1 (123) 456-7890</Link>
                    </li>
                    <li>
                        <i> <SiMinutemailer/> </i><Link to="/#">info@yourcompany.com</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
