import React from 'react'
// Import Input
import FormInput from "../From/index";
// Import Icons
import {AiOutlineGooglePlus} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {Link} from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <section id="login-area" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-area">
                                <div className="login-form-arae">
                                    <div className="form-area-heading text-center">
                                        <h3>Login To Your Account!</h3>
                                        <p>With your social network.</p>
                                    </div>
                                    <div className="social-login-area">
                                        <button type="submit"><i><AiOutlineGooglePlus/></i>
                                            Google
                                        </button>
                                        <button type="submit"><i><FaFacebookF/></i>
                                            Facebook
                                        </button>
                                        <button type="submit"><i><AiOutlineTwitter/></i>
                                            Twitter
                                        </button>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'text'}
                                                    name={'User_name'}
                                                    classes={'form-control'}
                                                    placeholder={'Username or email'}
                                                />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <FormInput
                                                    tag={'input'}
                                                    type={'password'}
                                                    name={'User_name'}
                                                    classes={'form-control'}
                                                    placeholder={'Password'}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="agree-label">
                                                    <input type="checkbox" id="chb1"/>
                                                    <label htmlFor="chb1">Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="pasword-remamber text-right">
                                                    <Link className="forget" to="/reset_password">Forgot my
                                                        password?</Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="login-button">
                                                    <FormInput
                                                        tag={'button'}
                                                        val={'Log In Now'}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="login-desc text-center">
                                                    <p>Not a member?<Link to="/register"> Register</Link>
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

export default LoginForm
