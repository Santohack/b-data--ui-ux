import React from 'react'
// Import Components
import CartItem from '../Cart/CartItems'
import {CartData} from '../Cart/CartData'
import {Link} from 'react-router-dom';

const CartDetails = () => {

    return (
        <>
            {/* Start Cart Area */}
            <section id="cart-area" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-desc">
                                <div className="cart-page table-responsive">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="product-remove">Delete</th>
                                            <th className="product-thumb">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {CartData.map((data, index) => (<CartItem data={data} key={index}/>))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-submit">
                                    <Link to="/shop" className="btn btn-theme btn-shop">
                                        UPDATE CART
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="coupon-code left">
                                <h3>Coupon</h3>
                                <div className="coupon-inner">
                                    <p>Enter your coupon code if you have one.</p>
                                    <input placeholder="Coupon code" type="text"/>
                                    <button type="submit" className="btn btn-theme btn-shop">Apply coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="coupon-code right">
                                <h3>Cart Totals</h3>
                                <div className="coupon-inner">
                                    <div className="cart-subtotal">
                                        <p>Subtotal</p>
                                        <p className="cart-amount">£215.00</p>
                                    </div>
                                    <div className="cart-subtotal">
                                        <p>Shipping</p>
                                        <p className="cart-amount"><span>Flat Rate:</span> £255.00</p>
                                    </div>
                                    <p className="calculate">
                                        Calculate shipping
                                    </p>
                                    <div className="cart-subtotal">
                                        <p>Total</p>
                                        <p className="cart-amount main-amount">£215.00</p>
                                    </div>
                                    <div className="checkout-btn">
                                        <Link to="checkout" className="btn btn-theme btn-shop">
                                            Proceed to Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Start Cart End */}
        </>
    )
}

export default CartDetails
