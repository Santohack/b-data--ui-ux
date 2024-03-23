import React from 'react'
import CommonBanner from '../component/Common/Banner'
import History from '../component/About/History'
import GetStarted from '../component/Common/GetStarted/index'
import Counter from '../component/Common/Counter/index'
import Testimonials from '../component/Common/Testimonials'
import TeamMembers from '../component/About/Team'

const About = () => {
    return (
        <>
            <CommonBanner heading="About" menu1="Home" menu2="About"/>
            <History/>
            <GetStarted/>
            <Counter/>
            <TeamMembers/>
            <Testimonials/>
        </>
    )
}

export default About
