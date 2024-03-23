import React from 'react'
// Import Component
import {ProductSliderData} from './ProductSliderData'
// Import Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const ProductSlider = () => {


    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    }
    return (
        <>
            {/* Slider Area Start */}
            <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true} autoplayHoverPause={true}
                         autoplayTimeout={2500} items={5} loop={true} margin={10} nav={false} dots={true}>
                {ProductSliderData.map((data, index) => (<div className="shop-details-img" key={index}>
                    <img alt="" src={data.img} />
                </div>))}
            </OwlCarousel>
            {/* Slider Area End */}
        </>
    )
}

export default ProductSlider
