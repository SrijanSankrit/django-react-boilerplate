import {
    SIGNUP_FAIL,
     SIGNUP_SUCCESS,
     LOGIN_FAIL,
     LOGIN_SUCCESS,
     LOGOUT
} from './Types';

import {setAlert} from './alert';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            "content-type" : "application/json",
        }
    }

    const body = JSON.stringify({email, password});
    try{
        const res = await axios.post("http://localhost:8000/api/token/",body, config); // POST the credentials.
        console.log(res);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data 
        });
        
        // alert for 5 secs that you are authenticated.
        dispatch(setAlert('Authentication successful!', 'success'));
    } catch(err){
        dispatch({
            type: LOGIN_FAIL,
        });

        dispatch(setAlert('Error Autheticating', 'Error'));
    }
};

export const signup = (email, firstName, lastName, password, password2, subjects, is_student ) => async dispatch => {
    const user = is_student ? 'student' : 'teacher';
    const url = `http://localhost:8000/api/accounts/signup/${user}/`;
    const config = {
        headers: {
            "content-type" : "application/json",
        }
    };

    const body = JSON.stringify({email, firstName, lastName, password, password2, subjects});

    try{
        const res = await axios.post(url , body,config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload : res.data
        });

        dispatch(login(email, password));

    } catch(err){
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert("Error Signing Up", "Error"));
    }
};

export const logout = () => dispatch => {
    dispatch(setAlert("Logout Successful" , "success"));
    dispatch({type: LOGOUT});
}