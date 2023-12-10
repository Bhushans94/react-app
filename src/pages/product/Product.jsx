import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getProductData } from '../../services/apiCall';
import { cartAction, productAction } from '../../store';
import Detail from './Detail';

import './Product.css';

const Product = () => {
    const dispatch = useDispatch(); // dispatch function

    /**
     * funtion to get product details and dispatch products and item count
     */
    const getData = async () => {
        const res = await getProductData('/assets/data/products.json');
        dispatch(productAction.addProductData(res.data));
        dispatch(cartAction.addCartItemsCount(res.data.length));
    }

    // hook to call API on component load
    useEffect(() => {
        getData();
    });

    return (
        <Detail />
    )
}

export default Product;