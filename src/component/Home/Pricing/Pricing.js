import React from 'react'
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import SectionHeading from '../SectionHeading/SectionHeading'
import { Link } from 'react-router-dom'
import {PricingData} from './PricingData'
import { BsCheckBox } from "react-icons/bs"  
const Pricing =({className = ''})=> { 
 return (
  <>
      <section className={`pricing-section ${className}`} >
        <div className="container">
            <SectionHeading title="Our Pricing Plan" heading={"Design  Solutions For Business"}/>
            <div className="row">
             <div className="col-lg-12 col-sm-12 col-12">
             <Tab.Container id="left-tabs-example" defaultActiveKey="monthly">
                <div className="tabs-box">
                    <div className="upper-box clearfix">
                     <div className="tab-btn-box">
                        <Nav className="nav nav-tabs tab-btns tab-buttons tab-title">
                          <Nav.Item>
                             <Nav.Link className="tab-btn active-btn" eventKey="monthly">Monthly</Nav.Link>
                        </Nav.Item>
                        
                          </Nav>
                          </div>
                    </div>
                    <div className="tabs-content">
                    <Tab.Content>
                    <Tab.Pane eventKey="monthly">
                    <div>
                            <div className="row clearfix parent ">
                                {PricingData.map((data, index)=>(
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block single-item-mt-2" key={index}>
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                           <h3>{data.title}</h3>
                                            <h2>${data.price}</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                {data.data.map((datas, index)=>(
                                                    <li key={index}>
                                                    <i><BsCheckBox/></i> {datas.list}
                                                    </li>
                                                ))}   
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <Link className="btn btn-pricing" to="/#">{data.btn}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="yearly">
                      <div>
                      <div className="row clearfix parent">
                                {PricingData.map((data, index)=>(
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block single-item-mt-2" key={index}>
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                            <h3>{data.title}</h3>
                                            <h2>${data.price}</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                {data.data.map((datas, index)=>(
                                                    <li key={index}>
                                                    <i><BsCheckBox/></i> {datas.list}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <Link className="btn btn-pricing" to="/#">{data.btn}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                      </Tab.Pane> */}
                    </Tab.Content>
                    </div>
                </div>
                </Tab.Container>
             </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default Pricing
