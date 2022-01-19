import axios from "axios"
import { loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure, } from "./userRedux"

export const login = async (dispatch,user)=> {
    dispatch(loginStart());
    try {
        const res = await axios.post("/api/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }

}

export const register = async (dispatch,user)=> {
    dispatch(registerStart());
    try {
        const res = await axios.post("/api/auth/register",user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());
    }
}

export const logout = async (dispatch)=> {
    dispatch(logoutStart());
    try {
        const res = await axios.post("/api/auth/logout");
        dispatch(logoutSuccess(res.data));
    } catch (error) {
        dispatch(logoutFailure());
    }

}