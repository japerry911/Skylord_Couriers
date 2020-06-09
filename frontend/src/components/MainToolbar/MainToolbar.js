import React, { Fragment } from 'react';
import { useStyles } from './MainToolbarStyles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const MainToolbar = ({ title, onMenuClick }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='Menu'
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        color='inherit'
                        className={classes.flex}
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </Fragment>
    );
};

export default MainToolbar;