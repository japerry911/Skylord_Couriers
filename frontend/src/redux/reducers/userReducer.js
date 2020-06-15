const INITIAL_STATE = { user: {}, shippers: [], couriers: [], token: null, isLoading: false, error: null, type: null, authed: false };

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_PENDING': 
            return { ...state, isLoading: true };

        case 'USER_ERROR':
            return { ...state, isLoading: false, error: action.error };

        case 'USER_SUCCESS':
            return { ...state, isLoading: false, error: null, ...action.payload };

        case 'USER_SIGN_OUT': 
            return INITIAL_STATE;
        
        default:
            return state;
    }
};

export default userReducer;