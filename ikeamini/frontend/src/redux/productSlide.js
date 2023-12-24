import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    productList :  [],
    cartItems : []
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setDataProduct : (state,action)=>{
            console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem : (state,action)=>{
                console.log(action)
        },
        deleteCartItem : (state,action)=>{

        }
    }

})


export const {setDataProduct,addCartItem,deleteCartItem} = productSlice.actions

export default productSlice.reducer