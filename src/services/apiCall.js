import axios from "axios";

const apiEndPointURls = {
    productDataUrl: '/assets/data/products.json',
    filterDataUrl: '/assets/data/dummyFilters.json'
}

// function to get product data
export const getProductData = (params = null) => {
    return axios.get(apiEndPointURls.productDataUrl, params);
}

// function to get all filter data
export const getFilterData = (params = null) => {
    return axios.get(apiEndPointURls.filterDataUrl, params);
}