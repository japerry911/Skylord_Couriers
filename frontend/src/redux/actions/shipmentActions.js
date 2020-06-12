import expressServer from '../../api/expressServer';

export const shipmentPending = () => {
    return {
        type: 'SHIPMENT_PENDING'
    };
};

export const shipmentError = error => {
    return {
        type: 'SHIPMENT_ERROR',
        error
    };
};

export const shipmentSuccess = payload => {
    return {
        type: 'SHIPMENT_SUCCESS',
        payload
    };
};


export const getPostings = token => {
    return async dispatch => {
        dispatch(shipmentPending());

        try {
            const response = await expressServer.get('/api/shipments', { headers: { 'x-auth-token': token }});
            
            const successObject = {
                postings: response.data
            };

            dispatch(shipmentSuccess(successObject));
        } catch (error) {
            dispatch(shipmentError(error.response.header));
            throw Error(error.response.data);
        }
    };
};