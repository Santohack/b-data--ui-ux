import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ContactDetails from '../component/Contact'

const Contact = () => {
    return (
        <>
            <CommonBanner heading="Contact" menu1="Home" menu2="Contact"/>
            <ContactDetails/>
        </>
    )
}

export default Contact
