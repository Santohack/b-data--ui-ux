import React from 'react'
import BlogCard from '../Blog/BlogCard'
import {BlogData} from '../Blog/BlogData'
import SectionHeading from '../SectionHeading/SectionHeading' 

const Blog=({className=""})=> {

 return (
  <div>
    <section id="blog-area" className={`py100 ${className}`}>
        {/* <div className="container">
            <SectionHeading title="News And Updates" heading="Latest Thinking of Data Science And Our Company News"/>
            <div className="row">
                {BlogData.map((data, index)=>(<BlogCard data={data} key={index} />))}
            </div>
        </div> */}
    </section>
  </div>
 )
}

export default Blog
