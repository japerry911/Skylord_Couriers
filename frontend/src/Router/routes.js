import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
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
                    path='/sign-in'
                    component={SignIn}
                />

                <Route
                    exact
                    path='/sign-up'
                    component={SignUp}
                />
            </Switch>
        </Fragment>
    );
} 