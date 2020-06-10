import expressServer from '../../api/expressServer';

export const userPending = () => {
    return {
        type: 'USER_PENDING'
    };
};

export const userError = error => {
    return {
        type: 'USER_ERROR',
        error
    };
};

export const userSuccess = payload => {
    return {
        type: 'USER_SUCCESS',
        payload
    };
};