import React from 'react'
import {TestData} from './TestimonialsData'
import TestimonialsItems from '../Testimonials/TestimonialsItems'
import SectionHeading from '../../Home/SectionHeading/SectionHeading'

// Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = ({className=""}) => {
    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 2,
        },
        1200: {
            items: 2,
        },
    }
    return (
        <>
            <section id="one-testimonial" className={`py100 ${className}`}>
                <div className="container">
                    <SectionHeading title="Testimonials" heading="What Our Client Say"/>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonials-slider-area">
                                <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true}
                                             autoplayHoverPause={true} autoplayTimeout={2500} loop={true} margin={10}
                                             nav={true} dots={false}>
                                    {TestData.map((data, index) => (<TestimonialsItems data={data} key={index}/>))}
                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
