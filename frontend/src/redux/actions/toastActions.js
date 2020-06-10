export const handleOpen = payload => {
    return {
        type: 'HANDLE_OPEN',
        payload
    };
};

export const handleClose = (event, reason) => {
    if (reason === 'clickaway') return { type: 'DEFAULT' };

    return {
        type: 'HANDLE_CLOSE'
    };
};