import {ShopData} from "./ShopData";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import React from "react";
import ShopCard from "./ShopCard";

const Products = props => {
    return (
        <>
            {/* Shop Area Start */}
            <section id="shop-area" className="py100">
                <div className="container">
                    <div className="row">
                        {ShopData.map((product, index) => (
                            <ShopCard product={product} key={index}/>
                        ))}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <ul>
                                    <li><i><MdKeyboardArrowLeft/></i></li>
                                    <li className="active">1</li>
                                    <li>2</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>....</li>
                                    <li><i><MdKeyboardArrowRight/></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Area End */}
        </>
    )
}

export default Products