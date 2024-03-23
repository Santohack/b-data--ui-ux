import React from 'react'
import {FaQuoteLeft} from "react-icons/fa";

const TestimonialsItems = (props) => {
    return (
        <>
            <div className="testimonial-box box-shadow border-radius">
                <div className="testimonial-comment ">
                    <i><FaQuoteLeft/></i>
                    <p>{props.data.para}</p>
                </div>
                <div className="testimonial-author">
                    <div className="testimonial-author-img">
                        <img alt="" src={props.data.img} />
                    </div>
                    <div className="testimonial-name">
                        <h3>{props.data.name}</h3>
                        <p>{props.data.des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsItems
