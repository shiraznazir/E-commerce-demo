import { createSlice } from "@reduxjs/toolkit"

const initialState = {products:[]}

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state,action) =>  {
            console.log("action",action.payload)
            state.products = action.payload
        }
    }
})

export const { setProduct } = products.actions

export default products.reducer