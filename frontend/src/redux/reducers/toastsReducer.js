const INITIAL_STATE = { open: false, type: null, mesasge: '' };

const toastsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HANDLE_OPEN':
            return { open: true, ...action.payload };

        case 'HANDLE_CLOSE':
            return { ...state, open: false };

        default: 
            return state;
    }
};

export default toastsReducer;