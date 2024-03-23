import React from 'react'
// Import Section Heading
import SectionHeading from '../../Home/SectionHeading/SectionHeading'

// Import TeamData
import {TeamData} from '../Team/TeamData'

// Import TeamCard
import TeamCard from '../Team/TeamCard'

const TeamMembers = ({className=""}) => {

    return (
        <>
            {/* Team Area Start */}
            <section id="team-area" className={`py100 ${className}`}>
                <div className="container">
                    <SectionHeading title="Our Team" heading="Meet Our Expert Team"/>
                    <div className="row">
                        {TeamData.map((data, index) => (<TeamCard data={data} key={index}/>))}
                    </div>
                </div>
            </section>
            {/* Team Area End */}
        </>
    )
}

export default TeamMembers
