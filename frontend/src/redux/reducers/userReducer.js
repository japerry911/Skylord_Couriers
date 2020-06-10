const INITIAL_STATE = { user: {}, token: null, isLoading: false, error: null, type: null };

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_PENDING': 
            return { ...state, isLoading: true };

        case 'USER_ERROR':
            return { ...state, isLoading: false, error: action.error };

        case 'USER_SUCCESS':
            return { ...state, isLoading: false, user: action.payload };

        default:
            return state;
    }
};

export default userReducer;