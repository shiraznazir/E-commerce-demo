import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducer/productSlice';

const store = configureStore({
    reducer:productSlice
})

export default store
