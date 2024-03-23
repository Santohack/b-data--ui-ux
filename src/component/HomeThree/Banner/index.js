import React, {useState} from 'react'
// Import Modal
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/css/modal-video.min.css'
// Icon
import {AiOutlinePlayCircle} from 'react-icons/ai';
// Img
import banner from '../../../assets/img/home5/banner.png'

const Banner = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section id="banner-five">
     <div className="bg-shape"></div>
     <div className="container">
         <div className="row">
             <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                 <div className="home-one-banner-content color-white ">
                     <h1 className="color-white ">Big Data & Analytics</h1>
                     <h2 className="color-white ">Innovative Solutions</h2>
                     <p className="color-white ">
                         Real-time data management technologies, global data market places, and award-winning service
                         make our solutions.
                     </p>
                     <ModalVideo channel='youtube' api={false} autoplay isOpen={isOpen} videoId="L61p2uyiMSo"
                                            onClose={() => setOpen(false)}/>
                     <div className="banner-one-btn pt30">
                     <a href="#!" className="banner-video color-white video-link" onClick={() => setOpen(true)}><AiOutlinePlayCircle/> Watch Video</a>
                     </div>
                 </div>
             </div>
             <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                 <div className="banner-img animation-img-one">
                     <img src={banner} alt="img" />
                 </div>
             </div>
         </div>
     </div>
   
 </section>     
        </>
    )
}

export default Banner
