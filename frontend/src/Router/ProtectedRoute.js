import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = props => {
    const authed = useSelector(state => state.user.authed);
    const { component: Component, ...propElements } = props;

    return (
        <Route
            {...propElements}
            render={propElements => (
                authed
                ?
                <Component {...propElements} />
                :
                <Redirect to='/sign-in-sign-up' />
            )}
        />
    );
};

export default ProtectedRoute;