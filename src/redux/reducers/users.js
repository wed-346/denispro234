
import { GET_AUTHORIZED_USER_SUCCESS, GET_USERS_FAILED, GET_USERS_STARTED, GET_USERS_SUCCESS } from "../actionCreateros/users";


const initialState = {
    user: {},
    isUserLoading: false,
    authorizedUser: undefined,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_STARTED:
            return {
                ...state,
                isUserLoading: true,
            };
            case GET_USERS_SUCCESS:
                return {
                    ...state,
                    isUserLoading: false,  
                    user: action.payload,             
                };
                case GET_USERS_FAILED:
                    return {
                        ...state,
                        isUserLoading: false,

                    };
                    case GET_AUTHORIZED_USER_SUCCESS:
                        return {
                            ...state,
                            authorizedUser: action.payload,
                            isUserLoading: false,

                        }
        default: 
        return {
            ...state,
        };
    }

};