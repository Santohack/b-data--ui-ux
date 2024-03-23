import React from 'react'

const SectionHeading=(props)=> {
 return (
  <>
   <div className="row justify-content-center">
           <div className="col-lg-8">
                    <div className="section-title-center text-center pb30">
                        <h3 className="pb10">{props.title}</h3>
                        <h2>{props.heading}</h2>
                    </div>
                </div>
          </div>
  </>
 )
}

export default SectionHeading
