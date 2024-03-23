import React from 'react';
import FormInput from "../From/index";

let options1 = [
    {
        text: "Select an option...",
        value: ""
    },
    {
        text: "USA",
        value: ""
    },
    {
        text: "Afghanistan",
        value: ""
    }
]
let options2 = [
    {
        text: "Select an option...",
        value: ""
    },
    {
        text: "Dhaka",
        value: ""
    },
    {
        text: "Khulna",
        value: ""
    }
]


const BillingsInformation = () => {
    return (
        <>
            {/* Billings Info Area Start */}
            <div className="checkout-area-bg box-shadow bg-white">
                <div className="check-heading">
                    <h3>Billings Information</h3>
                </div>
                <div className="check-out-form">
                    <form method="post">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag='input'
                                    type='text'
                                    name='User_name'
                                    classes='form-control'
                                    placeholder='First name *'
                                    label="First name"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <FormInput
                                        tag='input'
                                        type='text'
                                        name='User_name'
                                        classes='form-control'
                                        placeholder='Last name *'
                                        label="Last name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <FormInput
                                        tag='input'
                                        type='text'
                                        name='User_name'
                                        classes='form-control'
                                        placeholder='Company Name *'
                                        label="Company Name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                    <FormInput
                                        tag='input'
                                        type='text'
                                        name='User_name'
                                        classes='form-control'
                                        placeholder='Email Address'
                                       label="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag='select'
                                    classes='form-control'
                                    label="Country"
                                    options={options1}
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag='select'
                                    classes='form-control'
                                    label="State/City"
                                    options={options2}
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag='input'
                                    type='text'
                                    name='zip_code'
                                    classes='form-control'
                                    placeholder='Zip Code'
                                    label="Zipe Code"
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag='input'
                                    type='text'
                                    name='full_address'
                                    classes='form-control'
                                    placeholder='Enter your address here..'
                                    label="Full Address"
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'textarea'}
                                    type='text'
                                    name='additional_notes'
                                    classes='form-control'
                                    placeholder='Order Notes'
                                    label="Additional Notes"/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="materialUnchecked"/>
                                    <label className="form-check-label" htmlFor="materialUnchecked">Material
                                        unchecked</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Billing Info Area End */}
        </>
    )
}

export default BillingsInformation
