import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../../assets/img/error.png'

const ErrorMessage = () => {
    return (
        <>
            <section id="error" className="py100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="section-title-center">
                                <h2 className="pb10">Opps ! Page Not Found !!</h2>
                                <p className="pb20">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <Link to="/" className="btn btn-theme">Back To Home</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="error-img animation-img-two">
                                <img alt="" src={img1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorMessage
