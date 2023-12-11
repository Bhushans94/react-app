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
        try {
            const res = await getProductData();
            dispatch(productAction.addProductData(res.data));
            dispatch(cartAction.addCartItemsCount(res.data.length));
        } catch (error) {
            console.log(error);
        }
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