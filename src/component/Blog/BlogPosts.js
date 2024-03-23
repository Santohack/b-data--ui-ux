import {BlogData} from "./BlogData";
import BlogCard from "./BlogCard";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import React from "react";

const BlogPosts = props => {
    return (
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
    )
}

export default BlogPosts