import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ErrorMessage from '../component/Error'

const Error = () => {
    return (
        <>
            <CommonBanner heading="Error" menu1="Home" menu2="Error"/>
            <ErrorMessage/>
        </>
    )
}

export default Error
