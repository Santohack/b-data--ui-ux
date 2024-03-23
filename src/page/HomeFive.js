import React from 'react'
import Banner from '../component/HomeFive/Banner'
import AnalysisWork from '../component/HomeFour/AnalysisWork'
import OurServices from '../component/Home/OurService/OurServices'
import AboutTwo from '../component/Home/About/AboutTwo'
import WorkingProcessTwo from '../component/HomeFive/OurWorking'
import Pricing from '../component/Home/Pricing/Pricing'
import WorkingProcess from '../component/Home/OurWorkingProcess/WorkingProcess'
import Testimonials from '../component/Common/Testimonials'
import TeamMembers from '../component/About/Team'
import DownloadApp from '../component/HomeFour/Download'
import Blog from '../component/Home/Blog/Blog'
const HomeFive = () => {
    return (
        <>
          <Banner/>  
          <AnalysisWork/>
          <OurServices/>
          <AboutTwo/>
          <WorkingProcessTwo/>
          <Pricing/>
          <WorkingProcess className="bg-color"/>
          <Testimonials/>
          <TeamMembers className="bg-color" />
          <DownloadApp/>
          <Blog className="bg-color"/>
        </>
    )
}

export default HomeFive
