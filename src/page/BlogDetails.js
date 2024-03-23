import React from 'react'
import CommonBanner from '../component/Common/Banner'
import BlogDetailsArea from "../component/BlogDetails/BlogDetailsArea";
import DetailsContent from "../component/BlogDetails/DetailsContent";
import Sidebar from "../component/Blog/Sidebar";

const BlogDetails = () => {
    return (
        <>
            <CommonBanner heading="Blog Details" menu1="Home" menu2="Blog Details"/>
            <BlogDetailsArea>
                <DetailsContent/>
                <Sidebar/>
            </BlogDetailsArea>
        </>
    )
}

export default BlogDetails
