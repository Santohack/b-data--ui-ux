import React from 'react'
// import Img
import img1 from '../../assets/img/blog/post1.jpg'
// import Icon
import {FaComments} from "react-icons/fa";
import {GrView} from "react-icons/gr";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {MdRssFeed} from "react-icons/md";
import {AiOutlineGooglePlus} from "react-icons/ai";
// import Component
import ReplayForm from '../BlogDetails/ReplayForm';
import {CommentData} from '../BlogDetails/CommentData';
import Comments from '../BlogDetails/Comments';
import AuthorPost from '../BlogDetails/AuthorPost'

const DetailsContent = () => {

    return (
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            {/* Blog Details Area Start */}
            <div className="blog-details-arae">
                <div className="blog-main-details box-shadow ">
                    <div className="blog-details-img">
                        <img src={img1}  alt="imgaes"/>
                    </div>
                    <div className="blog-widget-text">
                        <div className="blog-widget-heading">
                            <h2><a href="#!">Check out the best themes of the last year</a></h2>
                        </div>
                        <div className="blog-widget-author">
                            <div className="blog-author-view">
                                <ul>
                                    <li><a href="#!">Software</a>
                                    </li>
                                    <li><a href="#!"><i> <FaComments/></i> 05</a>
                                    </li>
                                    <li><a href="#!"><i> <GrView/></i> 68</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-author-date">
                                <ul>
                                    <li>March 14th 2020</li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-widget-paragraph">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                fugit distinctio dolores ad corporis doloribus consectetur.
                                Lorem ipsum dolor sit, amet</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                fugit distinctio dolores ad corporis doloribus consectetur.
                                Lorem ipsum dolor sit, amet</p>
                            <h3>How to install the web theme</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                fugit distinctio dolores ad corporis doloribus consectetur.
                                Lorem ipsum dolor sit, amet</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia eos a.
                                Laborum reprehenderit animi magnam ipsam tenetur natus, similique earum cum, ut
                                fugit distinctio dolores ad corporis doloribus consectetur.
                                Lorem ipsum dolor sit, amet</p>
                        </div>
                    </div>
                    <div className="blog-share-area">
                        <ul>
                            <li>Share this:</li>
                            <li><a href="#!" className="social-icon"><i><FaFacebookF/></i></a>
                            </li>
                            <li><a href="#!" className="social-icon"><i><AiOutlineTwitter/></i></a>
                            </li>
                            <li><a href="#!" className="social-icon"><i><MdRssFeed/></i></a>
                            </li>
                            <li><a href="#!" className="social-icon"><i><AiOutlineGooglePlus/></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="media-author box-shadow">
                    <ul>
                        <AuthorPost/>
                    </ul>
                </div>
                <div className="comment-area-post box-shadow">
                    <div className="comment-area-heading">
                        <h3>Comments (3)</h3>
                    </div>
                    <div className="media-public ">
                        <ul>
                            {CommentData.map((data, index) => (<Comments data={data} key={index}/>))}
                        </ul>
                    </div>
                </div>
                <ReplayForm/>
            </div>
            {/* Blog Details Area End */}
        </div>
    )
}

export default DetailsContent
