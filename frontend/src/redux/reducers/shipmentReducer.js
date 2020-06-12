const INITIAL_STATE = { postings: [], error: null, loading: false };

export const shipmentReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHIPMENT_PENDING':
            return { ...state, loading: true };

        case 'SHIPMENT_ERROR':
            return { ...state, loading: false, error: action.error };

        case 'SHIPMENT_SUCCESS':
            return { ...state, loading: false, ...action.payload };

        default:
            return state;
    }
};