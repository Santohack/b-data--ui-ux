import React from 'react'
import {Link} from 'react-router-dom';

const ProductReview = (props) => {
    return (
        <>
            {/* Start Media Area */}
            <li className="media">
                <div className="media-img">
                    <img alt="" src={props.review.img} />
                </div>
                <div className="media-body">
                    <div className="media-header">
                        <div className="media-name">
                            <h4>{props.review.name}</h4>
                            <p>{props.review.time}</p>
                        </div>
                        <div className="post-share"><Link to="/#" className="replay">{props.review.replay}</Link>
                            <Link to="/#">{props.review.report}</Link>
                        </div>
                    </div>
                    <div className="media-paragraph">
                        <p>{props.review.comment}</p>
                    </div>
                </div>
            </li>
            {/* End Media Area */}
        </>
    )
}

export default ProductReview
