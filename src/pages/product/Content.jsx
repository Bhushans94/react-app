import React, { useState } from 'react'

import Rating from '../../common/rating/Rating';
import Stepper from '../../common/stepper/Stepper';

const Content = ({ product }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [qty, setQty] = useState(0);

    // function to show repetitive label data
    const showData = (label, data) => {
        return (
            <div className="mds-model">
                <span className="mds-model-title">{label}:</span> {data}
            </div>
        )
    }

    // function to calculate price
    const calculatePrice = (qty, price) => {
        return (qty * price).toFixed(2);
    }

    // function to set active index on size selection
    const onSizeSelection = (index) => {
        setActiveIndex(index);
    }

    // function to update quantity
    const updateQty = (option) => {
        if(option === 'increase') {
            setQty(qty + 1);
        } else {
            qty > 0 && setQty(qty - 1);
        }
    }

    return (

        <div className="mds-products-right-section">
            <div className="mds-product-details-description">

                {showData('Brand', product.name)}
                {showData('Model', product.model)}
                {showData('Availability', product.availability)}

                <h1 className="mds-product-name">
                    {product.desc}
                </h1>
                <Rating rating={product.rating} maxRating={product.maxRating} />
                <div className="mds-description-list">
                    <ul className="mds-description-list-unstyled">
                        {
                            product.featureList?.length
                                ? product.featureList.map((feature) => <li key={feature}>{feature}</li>)
                                : null
                        }
                    </ul>
                </div>
                <div className="mds-divider"></div>
                <div className="mds-size-container">
                    {
                        product.sizes?.length ?
                            product.sizes.map((size, index) => {
                                return (
                                    <div key={size + index} onClick={() => onSizeSelection(index)} className={activeIndex === index ? 'mds-size-single mds-size-active' : 'mds-size-single'}>
                                        {size}
                                    </div>)
                            }) : null
                    }
                </div>

                <div className="mds-divider"></div>
                <div className="mds-tex-title">USD(incl. of all taxes)</div>
                {
                    product.price.actualPrice > product.price.discountedPrice ?
                        <div className="mds-price-wrapper">
                            <span className="mds-current-price">${qty ? calculatePrice(qty, product.price.discountedPrice) : product.price.discountedPrice}</span>

                            <span className="mds-current-price mds-price-cutoff">
                                <del>${qty ? calculatePrice(qty, product.price.actualPrice) : product.price.actualPrice}</del>
                            </span>
                        </div>
                        : <span className="mds-current-price">${qty ? calculatePrice(qty, product.price.discountedPrice) : product.price.discountedPrice}</span>

                }

                <div className="mds-product-details-footer">

                    <Stepper qty={qty} decrementQty={() => updateQty('decrease')} incrementQty={() => updateQty('increase')} />

                    <button className="mdc-button mdc-button--raised">
                        <span className="mdc-button__label">Buy Now</span>
                    </button>
                    <button className="mdc-button mdc-button--outlined">
                        <span className="mdc-button__label">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content;