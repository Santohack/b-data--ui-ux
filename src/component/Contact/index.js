import React from 'react'
import ContactMap from '../Contact/ContactMap'
import ContactInfo from '../Contact/ContactInfo'
import ContactForm from '../Contact/Contactform'

const ContactDetails = () => {
    return (
        <>
            <section id="contact">
                <ContactMap/>
                <div className="container">
                    <div className="padding-areas">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <ContactInfo/>
                            </div>
                            <div className="col-lg-8  col-md-12 col-sm-12 col-12">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactDetails
