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

export const userSignUp = formData => {
    return async dispatch => {
        dispatch(userPending());

        try {
            console.log('HERE', formData);
            console.log(await expressServer.post('/api/users', { ...formData }));
            //console.log('Headers - ', response.headers);
        } catch (error) {
            dispatch(userError(error.response.data));
        }
    };
};