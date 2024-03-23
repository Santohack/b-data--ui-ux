import React from 'react'
import {FaqsData} from './FaqsData'

const FaqsArea = () => {
    return (
        <>
            <section id="faqs" className="py100">
                <div className="container">
                    <div className="faqs-title-page box-shadow">
                        <h2>FAQ</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="box-shadow">
                                <div className="list-group" id="list-tab" role="tablist">
                                    {FaqsData.map((data, index) => (
                                        <a
                                            className={index === 0 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                                            id="list-home-list1"
                                            data-toggle="list" key={index} href={"#list" + index} role="tab"
                                            aria-controls="list-home-list">{data.tab_name}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-12">
                            <div className="tab-content" id="nav-tabContent">
                                {FaqsData.map((data, index) => (
                                    <div className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
                                         id={"list" + index} key={index} role="tabpanel"
                                         aria-labelledby="list-home-list">
                                        <div className="faqs-items">
                                            <div className="accordion-wrapper">
                                                <div id={"accordion" + index}>
                                                    {data.data.map((data1, index1) => (
                                                        <div className="card mb20" key={index1}>
                                                            <div className="card-header box-shadow"
                                                                 id={"heading" + index}>
                                                                <h5 className="mb-0">
                                                                    <a href="#!" className="collapsed " role="button"
                                                                       data-toggle="collapse"
                                                                       data-target={"#collapse" + index + index1}
                                                                       aria-expanded="false"
                                                                       aria-controls={"#collapse" + index + index1}>{data1.heading}</a>
                                                                </h5>
                                                            </div>
                                                            <div id={"collapse" + index + index1} className="collapse"
                                                                 aria-labelledby={"heading" + index}
                                                                 data-parent={"#accordion" + index}>
                                                                <div className="card-body active">
                                                                    <p>{data1.para}</p>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqsArea
