import React from 'react'
// Import Components
import ProductReview from './/ProductReview'
import {ProductReviewData} from './/ProductReviewData'

const ProductTabs = () => {
    return (
        <>
            {/* Shop Items Area Start */}
            <section id="shop-items-details" className="pb100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-details-tabs">
                                <div className="product-tabs-header">
                                    <ul className="nav nav-tabs">
                                        <li><a className="active" data-toggle="tab" href="#description">Description</a>
                                        </li>
                                        <li><a data-toggle="tab" href="#review">Review ({ProductReviewData.length})</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-details-tabs-review box-shadow">
                                    <div className="tab-content">
                                        <div id="description" className="tab-pane active">
                                            <h3>Description</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Facilis, ducimus omnis voluptates
                                                doloremque
                                                perspiciatis enim vel, debitis vero adipisci libero ipsam quisquam
                                                expedita
                                                autem odio provident nulla vitae voluptate reprehenderit.</p>
                                        </div>
                                        <div id="review" className="tab-pane fade">
                                            <div className="media-public ">
                                                <ul>
                                                    {ProductReviewData.map((review, index) => (
                                                        <ProductReview review={review} key={index}/>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Items Area End */}
        </>
    )
}

export default ProductTabs
