import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp';
import Dashboard from '../pages/Dashboard/Dashboard';
import ScrollToTop from '../misc/ScrollToTop';

export default () => {
    return (
        <Fragment>
            <ScrollToTop />

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

                <Route
                    exact
                    path='/contact'
                    component={Contact}
                />

                <Route
                    exact
                    path='/sign-in-sign-up'
                    component={SignInSignUp}
                />

                <Route
                    exact
                    path='/:type/dashboard'
                    component={Dashboard}
                />
            </Switch>
        </Fragment>
    );
} 