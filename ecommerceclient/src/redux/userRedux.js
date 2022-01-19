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
         },
        loginSuccess:(state,action) => { 
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure:(state) => {
            state.isFetching = false;
            state.isError = true;
         },
        registerStart:(state) => { 
            state.isFetching = true ;  
        },
        registerSuccess:(state,action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            
         },
        registerFailure:(state) => { 
            state.isFetching = false;
            state.isError = true;
        },

        logoutStart:(state) => { 
            state.isFetching = true ;  
        },
        logoutSuccess:(state) => {
            state.isFetching = false;
            state.currentUser = {};
            
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