import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi';

const BannerCard = (props) => {
    return (
        <>
         <div className="banner_bootom_box text-center promo-hover-bg-1" >
             <div className="banner_bootom_icon">
               <img src={props.svg} alt="icon" />
             </div>
             <div className="banner_bootom_text">
                <h3>{props.heading}</h3>
                <p>{props.para}</p>
                <a href="#!">Learn More <FiArrowRightCircle/></a>
             </div>
            </div>   
        </>
    )
}

export default BannerCard
