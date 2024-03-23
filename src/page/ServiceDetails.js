import React from 'react'
import CommonBanner from '../component/Common/Banner'
import SingleServiceDetails from '../component/ServiceDetails/SingleServiceDeatils'
import RelatedServices from '../component/ServiceDetails/RelatedServices'
import ServiceGraph from '../component/ServiceDetails/ServiceGraph'

const ServiceDetails = () => {
    return (
        <>
            <CommonBanner heading="Service Details" menu1="Home" menu2="Service Details"/>
            <SingleServiceDetails/>
            <RelatedServices/>
            <ServiceGraph/>
        </>
    )
}

export default ServiceDetails
