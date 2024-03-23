import React from 'react'
import Banner from '../component/HomeTwo/Banner'
import BannerBottom from '../component/HomeTwo/BannerBottom'
import About from '../component/HomeTwo/About'
import HowItWork from '../component/HomeTwo/HowItWork'
import Features from '../component/HomeTwo/CoreFeatures'
import WorkProcess from '../component/HomeTwo/WorkProcess'
import OurService from '../component/HomeTwo/OurService'
import FrequentlyQuestions from '../component/HomeTwo/OurFaqs'
import Pricing from '../component/Home/Pricing/Pricing'
import Blogs from '../component/Common/Blog'


const HomeTwo = () => {
    return (
        <>
           <Banner/>
           <BannerBottom/>
           <About/>
           <HowItWork/>
           <Features/>
           <WorkProcess/>
           <OurService tilt={"tilt"}/>
           <FrequentlyQuestions/>
           <Pricing className="bg-color" />
           <Blogs tilt={"tilt"} />

        </>
    )
}

export default HomeTwo