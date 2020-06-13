const INITIAL_STATE = { postings: [], showShipment: {}, error: null, isLoading: false };

export const shipmentReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHIPMENT_PENDING':
            return { ...state, isLoading: true };

        case 'SHIPMENT_ERROR':
            return { ...state, isLoading: false, error: action.error };

        case 'SHIPMENT_SUCCESS':
            return { ...state, isLoading: false, ...action.payload };

        default:
            return state;
    }
};

export default shipmentReducer;