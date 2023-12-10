import React from 'react';
import { useSelector } from 'react-redux';
import CustomTab from '../../common/tab/CustomTab';
import Content from './Content';
import CarouselDefault from '../../common/carousel/CarouselDefault';
import { createTheme } from '@mui/material';

const Detail = () => {
    const products = useSelector(state => state.products.product);

    return (
        <>
            {
                products && products.length ?
                    products.map((product, index) => {
                        return (
                            <>
                                <div key={'detail' + index} className="mds-container">
                                    <div  key={'wrapper' + index} className="mds-products-details-wrapper">
                                        <CarouselDefault key={'carousel' + index} images={product.images} showStatus={false} showIndicators={false} />
                                        <Content key={'content' + index} product={product} />
                                    </div>
                                </div>
                                <CustomTab key={'customTab' + index} data={product.tabData} defaultValue={0} />
                            </>
                        )
                    })
                    : <p className='text-center'>No Product Found</p>
            }
        </>
    )
}

export default Detail;