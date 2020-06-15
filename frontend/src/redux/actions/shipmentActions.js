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
            dispatch(shipmentError(error.response.data));
            throw Error(error.response.data);
        }
    };
};

export const getShipment = (token, id) => {
    return async dispatch => {
        dispatch(shipmentPending());

        try {
            const response = await expressServer.get(`/api/shipments/${id}`, { headers: { 'x-auth-token': token }});

            const successObject = {
                showShipment: response.data
            };

            const totalWeight = successObject.showShipment.goods.reduce((accumulator, currentValue) => accumulator + currentValue.weight, 0);

            successObject.showShipment.goods.push({ 'name': '', 'weight': '' }, { 'name': 'Total:', 'weight': totalWeight });

            dispatch(shipmentSuccess(successObject));
        } catch (error) {
            dispatch(shipmentError(error.response.data));
            throw Error(error.response.data);
        }
    };
};