import React from 'react'
import {Link} from 'react-router-dom';

const PaymentInfo = () => {
    return (
        <>
            {/* Order Area Start */}
            <div className="order_review  box-shadow bg-white">
                <div className="check-heading">
                    <h3>Payment</h3>
                </div>
                <div className="payment_method">
                    <div className="payment_option">
                        <div className="custom-radio">
                            <input className="form-check-input" required="" type="radio" name="payment_option"
                                   id="exampleRadios3" value="option3"/>
                            <label className="form-check-label" htmlFor="exampleRadios3">Direct Bank Transfer</label>
                            <p data-method="option3" className="payment-text">There are many variations of passages
                                of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                        <div className="custom-radio">
                            <input className="form-check-input" type="radio" name="payment_option"
                                   id="exampleRadios4" value="option4"/>
                            <label className="form-check-label" htmlFor="exampleRadios4">Check Payment</label>
                            <p data-method="option4" className="payment-text">Please send your cheque to Store Name,
                                Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                        <div className="custom-radio">
                            <input className="form-check-input" type="radio" name="payment_option"
                                   id="exampleRadios5" value="option5"/>
                            <label className="form-check-label" htmlFor="exampleRadios5">Paypal</label>
                            <p data-method="option5" className="payment-text">Pay via PayPal; you can pay with your
                                credit card if you don't have a PayPal account.</p>
                        </div>
                    </div>
                </div>
                <Link to="/#" className="btn btn-theme">Place Order</Link>
            </div>
            {/* Order Area End */}
        </>
    )
}

export default PaymentInfo
