import actionTypes from '../types';

const { 
    INITIATE_LOGIN,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGIN_FAILURE,

    INITIATE_LOGIN_STATUS,
    ALREADY_LOGGED_IN,
    NOT_ALREADY_LOGGEDIN
} = actionTypes;


//=========Login==============//

export const initiateLoginAction = payload => ({

    payload,
    type: INITIATE_LOGIN
});
export const loginSuccess  = payload => ({

    payload,
    type: INITIATE_LOGIN_SUCCESS,
});
export const loginFailure  = payload => ({

    payload,
    type: INITIATE_LOGIN_FAILURE,
});

export const initiateCheckLoginStatus = payload => ({

    payload,
    type: INITIATE_LOGIN_STATUS
});
export const alreadyLoggedIn  = payload => ({

    payload,
    type: ALREADY_LOGGED_IN,
});
export const notAlreadyLoggedIn  = payload => ({

    payload,
    type: NOT_ALREADY_LOGGEDIN,
});