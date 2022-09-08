import { createSlice } from "@reduxjs/toolkit"

const initialState = {products:[]}

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state,action) =>  {
            state.products = action.payload.data
        }
    }

})

export const { setProduct } = products.actions

export default products.reducer