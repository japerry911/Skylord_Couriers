import React, { useState, useEffect } from 'react';
import { useStyles } from './NavBarStyles';
import MainToolbar from '../MainToolbar/MainToolbar';
import MainDrawer from '../MainDrawer/MainDrawer';
import { withRouter } from 'react-router-dom';
import { NON_AUTH_ROUTES_ARRAY, AUTH_COURIER_ROUTES_ARRAY, AUTH_SHIPPER_ROUTES_ARRAY } from '../../router/routesArrays';

const NavBar = ({ location }) => {
    const classes = useStyles();

    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    useEffect(() => {
        const combined = AUTH_COURIER_ROUTES_ARRAY.concat(...AUTH_SHIPPER_ROUTES_ARRAY).concat(...NON_AUTH_ROUTES_ARRAY);
        
        const currentPage = combined.find(routeObject => routeObject.link === location.pathname);
        if (currentPage) {
            setTitle(currentPage.title);
        }
    }, [location]);

    return (
        <div className={classes.root}>
            <MainToolbar
                title={title}
                onMenuClick={toggleDrawer}
            />
            <MainDrawer
                open={drawer}
                onClose={toggleDrawer}
                setTitle={setTitle}
            />
        </div>
    );
};

export default withRouter(NavBar);