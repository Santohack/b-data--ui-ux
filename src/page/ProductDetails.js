import React from 'react'
import CommonBanner from '../component/Common/Banner'
import SingleProduct from '../component/SingleProduct'

const ProductDetails = () => {
    return (
        <>
            <CommonBanner heading="Product Details" menu1="Home" menu2="Product Details"/>
            <SingleProduct/>
        </>
    )
}

export default ProductDetails
 