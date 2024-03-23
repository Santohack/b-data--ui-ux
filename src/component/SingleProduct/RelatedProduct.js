import React from 'react'
// Import Components
import {ShopData} from '../Shop/ShopData'
import ShopCard from '../Shop/ShopCard'

const RelatedProduct = () => {
    return (
        <>
            {/* Related Area Start */}
            <section id="related-area" className="pb100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title-center text-center pb30">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ShopData.slice(0,4).map((product, index) => (
                            <ShopCard product={product} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
            {/* Related Area End */}
        </>
    )
}

export default RelatedProduct
