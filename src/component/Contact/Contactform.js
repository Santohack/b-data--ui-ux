import React from 'react'
import FormInput from "../From/index";

const ContactForm = () => {
    return (
        <>
            <div className="contact-form-area box-shadow">
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                            <FormInput
                                tag={'input'}
                                type={'text'}
                                name={'first_name'}
                                classes={'form-control'}
                                placeholder={'First Name *'}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                            <FormInput
                                tag={'input'}
                                type={'text'}
                                name={'last_name'}
                                classes={'form-control'}
                                placeholder={'Last Name *'}
                            />
                        </div>
                        <div className="col-lg-12  col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'last_name'}
                                    classes={'form-control'}
                                    placeholder={'Enter Your Mail Here....'}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                                <FormInput
                                    tag={'textarea'}
                                    name={'con_message'}
                                    classes={'form-control'}
                                    placeholder={'Write Your Message *'}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-submit-button">
                                <FormInput
                                    tag={'button'}
                                    val={'Send Message'}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm
