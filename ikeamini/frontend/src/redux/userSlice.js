import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Image : "",
    email : " ",
    namaBelakang : " ",
    namaDepan :"",
    _id :"",
}

export const userSlice = createSlice ({
    name : "user",
    initialState,
    reducers : {
        loginRedux : (state,action)=>{
            console.log(action.payload.data)
           // state.user = action.payload.data
        state._id = action.payload.data._id
        state.namaDepan = action.payload.data.namaDepan
        state.namaBelakang = action.payload.data.namaBelakang
        state.email = action.payload.data.email
        state.Image = action.payload.data.Image
        },
        logoutRedux : (state,action) =>{
            state._id = " "
            state.namaDepan = " "
            state.namaBelakang = " "
            state.email = " "
            state.Image = " "
        },
    }
    
})

export const {loginRedux , logoutRedux} = userSlice.actions

export default userSlice.reducer