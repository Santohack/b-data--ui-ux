import React from 'react'
// Import Section Heading
import SectionHeading from '../../../component/Common/SectionHeading'
// import images
import Tilt from 'react-parallax-tilt';
import img1 from '../../../assets/img/svg/job-search.svg'
import img2 from '../../../assets/img/svg/automation.svg'
import img3 from '../../../assets/img/svg/smart-home.svg'
import img4 from '../../../assets/img/svg/big-data.svg'
import img5 from '../../../assets/img/svg/database.svg'
import img6 from '../../../assets/img/svg/conversation.svg'
import { Link } from 'react-router-dom'

const ServiceData =[
    {
        img:img1,
        heading:"Enterprise Job Scheduling",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam,
        maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.`
    },
    {
        img:img2,
        heading:"Dynamic Workload Automation",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, 
        maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.`
    },
    {
        img:img3,
        heading:"AI Cloud Automation",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam,
         maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.`
    },
    {
        img:img4,
        heading:"Big Data and Hadoop Automation",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam,
         maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.`
    },
    {
        img:img5,
        heading:"Hybrid Cloud File Transfers",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam,
         maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.`
    },
    {
        img:img6,
        heading:"AI ChatBots Creation",
        para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam,
         maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.`
    },
]

const OurService = (props) => {
    return (
        <>
            <section id="service-area-home4" className="py100  bg-color">
    <div className="container">
    <SectionHeading para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo" heading="Our Services" />
         {props.tilt ? (
                 <div className="row">
                 {ServiceData.map((data, index)=>(
                     <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                     <Tilt>
                      <div className="service-single-items" >
                          <img src={data.img} alt="icon" />
                          <h4><Link to="service_details">{data.heading}</Link></h4>
                          <p>{data.para}</p>
                     </div>
                     </Tilt>
                  </div>
                 ))}
             </div>
         ):(
            <div className="row">
            {ServiceData.map((data, index)=>(
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                 <div className="service-single-items" >
                     <img src={data.img} alt="icon" />
                     <h4><Link to="service_details">{data.heading}</Link></h4>
                     <p>{data.para}</p>
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

export default OurService
