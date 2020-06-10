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
            const response = await expressServer.post('/api/users', { ...formData });
            
            const successObject = {
                user: response.data,
                token: response.headers['x-auth-token']
            };

            dispatch(userSuccess(successObject));
        } catch (error) {
            dispatch(userError(error.response.data));
            throw Error(error.response.data);
        }
    };
};

export const userSignIn = formData => {
    return async dispatch => {
        dispatch(userPending());

        try {
            const response = await expressServer.pos('/api/auth', { ...formData });

            const successObject = {
                user: response.data,
                token: response.headers['x-auth-token']
            };

            dispatch(userSuccess(successObject));
        } catch (error) {
            dispatch(userError(error.response.data));
            throw Error(error.response.data);
        }
    };
};