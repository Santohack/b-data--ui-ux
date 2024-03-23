import React from 'react'
import CommonBanner from '../component/Common/Banner'
import CheckOutDetails from '../component/CheckOut'

const CheckOut = () => {
    return (
        <>
            <CommonBanner heading="Checkout" menu1="Home" menu2="Checkout"/>
            <CheckOutDetails/>
        </>
    )
}

export default CheckOut
