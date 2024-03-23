import React from 'react'
import CommonBanner from '../component/Common/Banner'
import BlogDetailsArea from "../component/BlogDetails/BlogDetailsArea";
import BlogPosts from "../component/Blog/BlogPosts";
import Sidebar from "../component/Blog/Sidebar";

const Blog = () => {
    return (
        <>
            <CommonBanner heading="Blog" menu1="Home" menu2="Blog"/>
            <BlogDetailsArea>
                <BlogPosts/>
                <Sidebar/>
            </BlogDetailsArea>
        </>
    )
}

export default Blog
