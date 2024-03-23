import React from 'react'
import img from '../../assets/img/project-details/2.png'

const SingleServiceDeatils = () => {
    return (
        <>
            <section id="service-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-details-img">
                                <img alt="" src={img} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">Delivering the insights you to help business growth</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae adipisci
                                        laudantium
                                        corporis, officiis ut dolore fuga doloremque, aperiam excepturi quisquam optio
                                        distinctio. Iure sequi illum rem. Libero perferendis quae dignissimos?</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae adipisci
                                        laudantium
                                        corporis, officiis ut dolore fuga doloremque, aperiam excepturi quisquam optio
                                        distinctio. Iure sequi illum rem. Libero perferendis quae dignissimos?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleServiceDeatils
