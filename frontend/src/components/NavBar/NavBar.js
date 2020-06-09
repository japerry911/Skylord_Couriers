import React, { useState } from 'react';
import { useStyles } from './NavBarStyles';
import MainToolbar from '../MainToolbar/MainToolbar';
import MainDrawer from '../MainDrawer/MainDrawer';

const NavBar = () => {
    const classes = useStyles();

    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

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

export default NavBar;