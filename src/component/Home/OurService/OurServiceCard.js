import React from 'react'
import { Link } from 'react-router-dom'

function OurServiceCard(props) {
 return (
  <>
        {/* Service Card Start */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p>
        <Link to="/service_details">{props.data.button}</Link>
        </div>
        </div>
        </div>
        {/* Service Card End */}
  </>
 )
}

export default OurServiceCard
