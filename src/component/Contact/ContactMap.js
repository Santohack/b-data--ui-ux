import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';

const ContactMap = () => {

    const mapStyles = {
        height: "50vh",
        width: "100%",
        margin: "0 0 0 0"
    };
    const defaultCenter = {
        lat: 22.8136822, lng: 89.5635596
    }
    return (
        <>
            <LoadScript>
                <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}></GoogleMap>
            </LoadScript>
        </>
    )
}

export default ContactMap
