import React from 'react'
import CommonBanner from '../component/Common/Banner'
import SingleProject from '../component/ProjectDetails'

const ProjectDetails = () => {
    return (
        <>
            <CommonBanner heading="Project Details" menu1="Home" menu2="Project Details"/>
            <SingleProject/>
        </>
    )
}

export default ProjectDetails
