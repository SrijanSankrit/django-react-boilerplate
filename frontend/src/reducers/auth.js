import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT } from "../actions/Types";

const initialState = {
    isAuthenticated : false,
    token : localStorage.getItem('token'),
    loading : false
};

export default function(state=initialState, action){
    const {type, payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {
                ...state, 
                isAuthenticated : true,
                token : payload.access,
                loading : false
            }
        
        case SIGNUP_SUCCESS:
            return{
                ...state, 
                isAuthenticated : false,
                loading : true // Doing loading is true, because in this page, you are logged in as soon as you signup.
                // Until then, loading  is true.
            }
        
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated : false,
                loading : false
            }
        
        default:
            return state    

    }

}

