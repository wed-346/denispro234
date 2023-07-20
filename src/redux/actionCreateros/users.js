export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED  = 'GET_USERS_FAILED';
export const GET_USERS_STARTED =  'GET_USERS_STARTED';
export const GET_AUTHORIZED_USER_SUCCESS = 'GET_AUTHORIZED_USER_SUCCESS';

export const getUsersSucces = (user) => ({
    type: GET_USERS_SUCCESS,
    payload: user,


});
export const getUsersFailed = (error) => ({
    type: GET_USERS_FAILED,
    payload: error,


});
export const getUsersStarted = () => ({
    type: GET_USERS_STARTED,
   


});
export const get_Authorized_user_success = (user) => ({
    type: GET_AUTHORIZED_USER_SUCCESS,
    payload: user,

});
