import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action) => {
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct:(state,action)=> {
            if(state.quantity>0) state.quantity -= 1;
            state.products = state.products.filter(product => product.tempproductId !== action.payload.tempproductId);
            state.total -= action.payload.removedtotal;
        },
        clearCart : (state) => {
            state.quantity=0;
            state.products=[];
            state.total=0;
        }
    }
});

export const {addProduct,removeProduct,clearCart} = cartSlice.actions;
export default cartSlice.reducer;