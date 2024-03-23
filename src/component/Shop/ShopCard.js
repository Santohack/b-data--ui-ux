import React from 'react'
import {Link} from 'react-router-dom';

const ShopCard = (props) => {
    return (
        <>
            {/* Shop Area Start */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="shop-item responsive-mt text-center">
                    <div className="shop-img">
                        <img alt="" src={props.product.img} />
                    </div>
                    <div className="shop-info box-shadow">
                        <h3><Link to="/product_details">{props.product.name}</Link></h3>
                        <p><span>${props.product.price}</span>
                        </p> <Link to="/product_details" className="btn btn-theme btn-shop">{props.product.button}</Link>
                    </div>
                </div>
            </div>
            {/* Shop Area End */}
        </>
    )
}

export default ShopCard
