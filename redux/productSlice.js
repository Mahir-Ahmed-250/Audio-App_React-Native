import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch("https://ancient-oasis-14511.herokuapp.com/products")
    return response.json()
})

export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { payload } = action
            state.status = "success"
            console.log("API RESPONSE---->", payload)
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export const selectStatus = state => state.products.status;

export default productSlice.reducer;