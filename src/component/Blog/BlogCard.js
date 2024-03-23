import React from 'react'
import {Link} from 'react-router-dom';
// Import Icon
import {FaComments} from "react-icons/fa";
import {GrView} from "react-icons/gr";

const BlogCard = (props) => {
    return (
        <>
            {/* Blog Card Area Strat */}
            <div className="blog-widget box-shadow">
                <div className="blog-widget-img">
                    <Link to="/blog_details">
                        <img alt="" src={props.data.img} />
                    </Link>
                </div>
                <div className="blog-widget-text">
                    <div className="blog-widget-heading">
                        <h2><Link to="/blog_details">{props.data.heading}</Link></h2>
                    </div>
                    <div className="blog-widget-author">
                        <div className="blog-author-view">
                            <ul>
                                <li><Link to="/blog_details">{props.data.category}</Link>
                                </li>
                                <li><Link to="#!"><i><FaComments/></i>{props.data.comment}</Link>
                                </li>
                                <li><Link to="#!"><i><GrView/></i>{props.data.view}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="blog-author-date">
                            <ul>
                                <li>{props.data.date}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog-widget-paragraph">
                        <p>{props.data.para}</p>
                    </div>
                    <div className="blog-widget-button"><Link to="/blog_details"
                                                              className="btn btn-theme">{props.data.button}</Link>
                    </div>
                </div>
            </div>
            {/* Blog Card Area End */}
        </>
    )
}

export default BlogCard
