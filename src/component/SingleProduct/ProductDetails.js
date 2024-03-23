import React from 'react'
// Import Components
import ProductSlider from './/ProductSlider'
// Import Icons
import {AiFillStar} from "react-icons/ai";
import {Link} from 'react-router-dom';

const ProductDetails = () => {
    return (
        <>
            {/* Shop Details Start */}
            <section id="shop-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <ProductSlider/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="shop-details-info">
                                <h3>Caramel Wallet</h3>
                                <div className="customer-star">
                                    <ul>
                                        <li><i><AiFillStar/></i></li>
                                        <li><i><AiFillStar/></i></li>
                                        <li><i><AiFillStar/></i></li>
                                        <li><i><AiFillStar/></i></li>
                                        <li><i><AiFillStar/></i></li>
                                    </ul>
                                    <h6>(2 Customer Review)</h6>
                                </div>
                                <h5>$25.00</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore incidunt possimus
                                    blanditiis debitis dolore nobis non rem vel velit molestias ea minima repellat,
                                    officia
                                    maxime obcaecati et asperiores fugit nam?</p>
                                <div className="quenty-btn-area">
                                    <div className="number-input">
                                        <form action="#" id="number-box">
                                            <input type="number" className="form-control"  min="1" max="10"
                                                   placeholder="1"/>
                                        </form>
                                    </div>
                                    <div className="add-btn"><Link to="/cart" className="btn btn-theme btn-shop">Add TO
                                        CART</Link>
                                    </div>
                                </div>
                                <div className="shop-category">
                                    <ul>
                                        <li>Category:</li>
                                        <li className="items-product">Wallet</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Details End */}
        </>
    )
}

export default ProductDetails
