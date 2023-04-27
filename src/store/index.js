import  {configureStore} from '@reduxjs/toolkit'
import { ProductsSlice } from './ProductsSlice'
import { cartSlice} from '../store/cartSlice'

export const store=configureStore({
    reducer:{
        products:ProductsSlice.reducer,
        cart:cartSlice.reducer,
    }
})
