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