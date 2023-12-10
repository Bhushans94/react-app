import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselDefault = ({ images, showStatus, showIndicators }) => {
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
        </div>
    )
}

export default CarouselDefault;