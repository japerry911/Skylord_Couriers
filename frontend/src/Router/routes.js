import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp';
import Dashboard from '../pages/Dashboard/Dashboard';
import Postings from '../pages/Postings/Postings';
import Profile from '../pages/Profile/Profile';
import ShowShipment from '../pages/ShowShipment/ShowShipment';
import ScrollToTop from '../misc/ScrollToTop';
import ProtectedRoute from './ProtectedRoute';

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

                <ProtectedRoute
                    exact
                    path='/:type/dashboard'
                    component={Dashboard}
                />

                <ProtectedRoute
                    exact
                    path='/:type/postings'
                    component={Postings}
                />

                <ProtectedRoute
                    exact
                    path='/:type/profile'
                    component={Profile}
                />

                <ProtectedRoute
                    exact
                    path='/:type/shipments/:id'
                    component={ShowShipment}
                />
            </Switch>
        </Fragment>
    );
} 