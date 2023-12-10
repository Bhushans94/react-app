import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialProductState = { product: [] };

const initialCartState = { cartItemCount: 0 }

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        addProductData(state, action) {
            state.product = [...action.payload];
        }
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addCartItemsCount(state, action) {
            state.cartItemCount = action.payload;
        }
    }
});

export const productAction = productSlice.actions;
export const cartAction = cartSlice.actions;

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store;