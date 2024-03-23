import React from 'react'
import CommonBanner from '../component/Common/Banner'
import CartDetails from '../component/Cart'

const Cart = () => {
    return (
        <>
            <CommonBanner heading="Cart" menu1="Home" menu2="Cart"/>
            <CartDetails/>
        </>
    )
}

export default Cart
