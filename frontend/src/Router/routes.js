import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

export default () => {
    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Home}
                />

                <Route
                    exact
                    path='/about'
                    component={About}
                />
            </Switch>
        </Fragment>
    );
} 