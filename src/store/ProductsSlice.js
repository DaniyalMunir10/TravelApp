import { createSlice, CreateSlice } from "@reduxjs/toolkit";
import products from "../data/products";



const initialState={
    products:products,
    selectedProduct:null,
}

export const ProductsSlice =createSlice({
    name:'products',
    initialState,
    reducers:{
        setSelectedProduct:(state,action)=>{
          const productId=action.payload;
          state.selectedProduct=state.products.find((p)=>p.id===productId)
        }
    }

})