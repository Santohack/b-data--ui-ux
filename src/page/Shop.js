import React from 'react'
import CommonBanner from '../component/Common/Banner'
import Products from "../component/Shop/Products";

const Shop = () => {
    return (
        <>
            <CommonBanner heading="Shop" menu1="Home" menu2="Shop"/>
            <Products/>
        </>
    )
}

export default Shop
 