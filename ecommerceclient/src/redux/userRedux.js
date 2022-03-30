import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:{},
        isFetching:false,
        isError:false,
    },
    reducers:{
        loginStart:(state) => {
            state.isFetching = true ;  
            state.isError = false;
         },
        loginSuccess:(state,action) => { 
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isError = false;
        },
        loginFailure:(state) => {
            state.isFetching = false;
            state.isError = true;
         },
        registerStart:(state) => { 
            state.isFetching = true ;  
            state.isError = false;
        },
        registerSuccess:(state,action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isError = false;
         },
        registerFailure:(state) => { 
            state.isFetching = false;
            state.isError = true;
        },

        logoutStart:(state) => { 
            state.isFetching = true ; 
            state.isError = false; 
        },
        logoutSuccess:(state) => {
            state.isFetching = false;
            state.currentUser = {};
            state.isError = false;
            
         },
         logoutFailure:(state) => { 
            state.isFetching = false;
            state.isError = true;
        },
    }
});

export const {loginStart,
        loginSuccess,
        loginFailure,
        registerStart,
        registerSuccess,
        registerFailure,
        logoutStart,
        logoutSuccess,
        logoutFailure,
    } = userSlice.actions;
    
export default userSlice.reducer;