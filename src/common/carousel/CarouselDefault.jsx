import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselDefault.css';

const CarouselDefault = ({ images, showStatus, showIndicators, title }) => {
    return (
        <div className="mds-products-left-section">
            <Carousel showStatus={showStatus} showIndicators={showIndicators}>
                {
                    images && images.length ? images.map((image, index) => {
                        return (
                            <img key={'image' + index} src={image.src} alt={image.alt} />
                        )
                    }) : null
                }
            </Carousel>
            <div className="mds-product-view-thumnail">
                <div className="mds-product-short-details">
                    {title}
                </div>
            </div>
        </div >
    )
}

export default CarouselDefault;