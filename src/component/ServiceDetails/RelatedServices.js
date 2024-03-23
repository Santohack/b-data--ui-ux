import React from 'react'
import {OurServiceData} from "../Home/OurService/OurServicesData";
import OurServiceCard from "../Home/OurService/OurServiceCard";

const RelatedServices = () => {
    return (
        <>
            <section id="service-slider" className="py100 bg-color">
                <div className="container">
                    <div className="row">
                        {OurServiceData.slice(0,3).map( (data, index)=>( <OurServiceCard data={data} key={index}/> ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedServices
