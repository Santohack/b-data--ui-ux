import React from 'react'
// Import Section Heading
import SectionHeading from '../../../component/Common/SectionHeading'
import svg1 from '../../../assets/img/svg/analytics.svg'
import svg2 from '../../../assets/img/svg/data-transfer.svg'
import svg3 from '../../../assets/img/svg/neural.svg'
import svg4 from '../../../assets/img/svg/success.svg'

const Work_Process = () => {
    return (
        <>
           <section id="work-process-home4" className="py100">
    <div className="container">
    <SectionHeading para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo" heading="Our Work Process" />
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="work-process-wrappers">
                    <div className="single-items-process">
                        <div className="work-process-icons rounded">
                          <img src={svg1} alt="icon" />
                            <span className="process-step shadow-sm">1</span>
                        </div>
                       <span className="work-process-divider"></span>
                       <div className="work-process-text">
                           <h4>Data Records</h4>
                           <p>Compellingly harness reliable methodologies and orthogonal web enterprise without services. </p>
                       </div>
                    </div>
                    <div className="single-items-process">
                        <div className="work-process-icons rounded">
                            <img src={svg2} alt="icon" />
                            <span className="process-step shadow-sm">2</span>
                        </div>
                       <span className="work-process-divider"></span>
                       <div className="work-process-text">
                           <h4>Data Translator</h4>
                           <p>Intrinsicly scale out-of-the-box customer service strategic theme world-className architectures.</p>
                       </div>
                    </div>
                    <div className="single-items-process">
                        <div className="work-process-icons rounded">
                            <img src={svg3} alt="icon" />
                            <span className="process-step shadow-sm">3</span>
                        </div>
                       <span className="work-process-divider"></span>
                       <div className="work-process-text">
                           <h4>AI Algorithm</h4>
                           <p>Proactively unleash high standards in expertise exceptional services e-business networks.</p>
                       </div>
                    </div>
                    <div className="single-items-process">
                        <div className="work-process-icons rounded">
                            <img src={svg4} alt="icon" />
                            <span className="process-step shadow-sm">4</span>
                        </div>
                       <div className="work-process-text">
                           <h4>Outage Prediction</h4>
                           <p>Compellingly harness reliable methodologies web services user-centric collaboration.</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>  
        </>
    )
}

export default Work_Process
