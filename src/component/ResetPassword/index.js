import React from 'react'
import {Link} from 'react-router-dom';

const ResetPasswordForm = () => {
    return (
        <>
            <section id="login-area" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-area">
                                <div className="login-form-arae">
                                    <div className="form-area-heading reset-Password text-center">
                                        <h3>Reset Your Password</h3>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Old Passwoerd"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control"
                                                           placeholder="New Password"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="login-button">
                                                    <button type="submit" className="btn btn-theme">Comfrirm</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="login-desc text-center">
                                                    <p>Not a Change?<Link to="/login"> Login</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPasswordForm

