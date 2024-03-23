import React from 'react'
import {Link} from 'react-router-dom';
// Import Section Heading
import SectionHeading from '../../../component/Common/SectionHeading'
import Tilt from 'react-parallax-tilt';
// img Import
import img from '../../../assets/img/about/11.jpg'
import img1 from '../../../assets/img/about/22.jpg'
import img2 from '../../../assets/img/about/33.jpg'
const BlogDatas = [
    {
        img:img,
        date:"18 jun",
        year:"2021",
        category: [
            {
                process:"Process",
                store:"Store"
            }
        ],
        heading:"Analysis rendered entir Highly indeed to garden",
        button:"Read More"
    },
    {
        img:img1,
        date:"18 jun",
        year:"2021",
        category: [
            {
                process:"Process",
                store:"Store"
            }
        ],
        heading:"Analysis rendered entir Highly indeed to garden",
        button:"Read More"
    },
    {
        img:img2,
        date:"18 jun",
        year:"2021",
        category: [
            {
                process:"Process",
                store:"Store"
            }
        ],
        heading:"Analysis rendered entir Highly indeed to garden",
        button:"Read More"
    }
]

const Blogs = (props) => {
    return (
        <>
    <section id="blog-area" className="py100">
    <div className="container">
       <SectionHeading para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo" heading="Our Blog" />
      {props.tilt ? (
          <div className="row">
          {BlogDatas.map((data, index)=>(
               <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                    <Tilt>
               <div className="blog-items-home4 responsive-mt-30 box-shadow">
                   <div className="blog-imgs-home4 ">
                       <Link to="/blog_details">
                           <img src={data.img} alt="img" />
                           <div className="dats-area-home4">
                              {data.date} <br/> <strong>{data.year}</strong>
                           </div>
                       </Link>
                   </div>
                   <div className="blog-home4-info">
                       <div className="meta-area">
                           <ul>
                               <li><i className="fas fa-folder-open"></i></li>
                               {data.category.map((cate, index)=>(
                                   <ul key={index}>
                                    <li><a href="#!">{cate.process} ,</a></li>
                                    <li><a href="#!">{cate.store}</a></li>
                                    </ul>
                               ))}
                              
                           </ul>
                       </div>
                       <h4><Link to="/blog_details">{data.heading}</Link></h4>
                       <Link to="/blog_details" className="btn btn-shop btn-theme mt10">{data.button}</Link>
                   </div>
               </div>
               </Tilt>
           </div>
          ))}
      </div>
      ):(
        <div className="row">
        {BlogDatas.map((data, index)=>(
             <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
             <div className="blog-items-home4 responsive-mt-30 box-shadow">
                 <div className="blog-imgs-home4 ">
                     <Link to="/blog_details">
                         <img src={data.img} alt="img" />
                         <div className="dats-area-home4">
                            {data.date} <br /> <strong>{data.year}</strong>
                         </div>
                     </Link>
                 </div>
                 <div className="blog-home4-info">
                     <div className="meta-area">
                         <ul>
                             <li><i className="fas fa-folder-open"></i></li>
                             {data.category.map((cate, index)=>(
                                 <ul  key={index}>
                                 <li><a href="#!">{cate.process} ,</a></li>
                                  <li><a href="#!">{cate.store}</a></li>
                                 </ul>
                             ))}
                            
                         </ul>
                     </div>
                     <h4><Link to="/blog_details">{data.heading}</Link></h4>
                     <Link to="/blog_details" className="btn btn-shop btn-theme mt10">{data.button}</Link>
                 </div>
             </div>
         </div>
        ))}
    </div>
      )}
    </div>
</section>   
        </>
    )
}

export default Blogs