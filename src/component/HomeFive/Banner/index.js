import React, {useState} from 'react'
import img from '../../../assets/img/home-three-banner/computer.png'
// Icon
import {AiOutlinePlayCircle} from 'react-icons/ai';

// Import React Dom
import {Link} from 'react-router-dom';
// Modal 
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/css/modal-video.min.css'

const Banner = () => {
    const [isOpen, setOpen] = useState(false) 
    return (
        <>
           <section id="banner-three">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="home-three-banner-content">
                        <h1>Big Data & Analytics</h1>
                        <h2>Innovative Solutions</h2>
                        <p>
                            Real-time data management technologies, global data market places, and award-winning service
                            make our solutions.
                        </p>
                        <ModalVideo channel='youtube' api={false} autoplay isOpen={isOpen} videoId="L61p2uyiMSo"
                                            onClose={() => setOpen(false)}/>
                        <div className="banner-three-btn banner-one-btn  pt30">
                            <Link to="/#" className="btn btn-theme">Get Started</Link>
                            {/* <a href="#!" className="banner-video video-link"
                                     onClick={() => setOpen(true)}><AiOutlinePlayCircle/> Watch Video</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="banner-img-three">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>   
        </>
    )
}

export default Banner
