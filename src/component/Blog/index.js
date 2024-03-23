import React from 'react'
// Import BlogData
import {BlogData} from './BlogData'
// Import BlogCard
import BlogCard from '../Blog/BlogCard'
// Import Blog Sidebar
import Sidebar from '../Blog/Sidebar'
// Import Icon
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";

const Blogs = () => {
    return (
        <>
            {/* Blog Area Start */}
            <section id="blog-main-area" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="blog-wrapper-blog-item">
                                {BlogData.map((data, index) => (<BlogCard data={data} key={index}/>))}
                                <div className="pagination-area">
                                    <ul>
                                        <li><i><MdKeyboardArrowLeft/></i></li>
                                        <li className="active">1</li>
                                        <li>2</li>
                                        <li>....</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li><i><MdKeyboardArrowRight/></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Area End */}
        </>
    )
}

export default Blogs
