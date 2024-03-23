import React from 'react'

const SectionHeading = (props) => {
    return (
        <>
        <div className="row justify-content-center pb30">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="section-center-two text-center pb30">
                <h2>{props.heading}</h2>
                <p>
                {props.para}
                </p>
              </div>
            </div>
          </div>
        </>
    )
}

export default SectionHeading
