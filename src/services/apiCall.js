import axios from "axios";

// function to get product data
export const getProductData = (url, params = null) => {
    return axios.get(url, params);
}

// function to get all filter data
export const getFilterData = (url, params = null) => {
    return axios.get(url, params);
}