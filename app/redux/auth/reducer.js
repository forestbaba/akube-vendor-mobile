import actionTypes from '../types';

const {
    INITIATE_LOGIN,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGIN_FAILURE,

    INITIATE_LOGIN_STATUS,
    ALREADY_LOGGED_IN,
    NOT_ALREADY_LOGGEDIN
} = actionTypes;


const initialState = {
    loading: false,
    loginSuccess: false,
    loginFailure: false,
    loggedInUser: {},
    error: {},
    notLoggedin:false

}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case INITIATE_LOGIN:
            return {...state, loading: true}

        case INITIATE_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedInUser: payload
            };
       
        case INITIATE_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
       
        
        case INITIATE_LOGIN_STATUS:
            return { ...state, loading: true }
        
        case ALREADY_LOGGED_IN:
            return {
                ...state,
                loading: false,
                loggedInUser: payload
            };
        
        case NOT_ALREADY_LOGGEDIN:
            return {
                ...state,
                loading: false,
                notLoggedin: false
            };

              default:
            return state;

    }
}