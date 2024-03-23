import React from 'react'
// Import Components
import SectionHeading from '../SectionHeading/SectionHeading'
import WorkingProcessCard from '../OurWorkingProcess/WorkingProcessCard'
import {WorkProcessData} from './WorkingProcessData'

const WorkingProcess=({className = ''})=> {
 return (
  <>                                                               
  {/* Work Process Area Start */}
    <section id="work-process" className={`py100 ${className}`}>
        <div className="container">
           <SectionHeading title="Our Working Process" heading="Data Science Solutions For Startup"/>
            <div className="row">
             {WorkProcessData.map((data, index) =>( <WorkingProcessCard data={data} key={index} />))}   
            </div>
        </div>
    </section>
  </>
 )
}

export default WorkingProcess
