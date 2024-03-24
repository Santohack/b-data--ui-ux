import React from 'react'
// Import Components
import SectionHeading from '../SectionHeading/SectionHeading' 
import {OurServiceData} from './OurServicesData'
import OurServiceCard from '../OurService/OurServiceCard'

const OurServices=()=> {
return (
  <>
  {/* Service Area Start */}
    <section id="service" className="bg-color">
        <div className="container">
            <SectionHeading title="Our Services" heading={"We Offer A Wide Range Of UX/ UI Design and Research Services"}/>
            <div className="row">
                {OurServiceData.map( (data, index)=>( <OurServiceCard data={data} key={index}/> ))}
            </div>
        </div>
    </section>
      {/* Service Area End */}
  </> 
 )
}

export default OurServices
