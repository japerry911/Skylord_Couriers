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
            await expressServer.post('/api/users', { ...formData });
            dispatch(userSuccess({}));
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
            const response = await expressServer.post('/api/auth', { ...formData });

            const successObject = {
                user: response.data,
                token: response.headers['x-auth-token'],
                authed: true
            };

            dispatch(userSuccess(successObject));
        } catch (error) {
            dispatch(userError(error.response.data));
            throw Error(error.response.data);
        }
    };
};

export const userSignOut = () => {
    return {
        type: 'USER_SIGN_OUT'
    };
};