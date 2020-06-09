import React, { Fragment } from 'react';
import { useStyles } from './MainToolbarStyles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const MainToolbar = ({ title, onMenuClick }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar>
                <Toolbar className={classes.toolbarStyle}>
                    <Link
                        to='/'
                        className={classes.figureLinkStyle}
                    >
                        <figure className={classes.figureStyle}>
                            <img
                                alt='Skylord Couriers Logo'
                                src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                                className={classes.logoStyle}
                            />
                        </figure>
                    </Link>
                    <div className={classes.spacerStyle} />
                    <Typography
                        variant='h6'
                        color='inherit'
                        className={classes.flex}
                    >
                        {title}
                    </Typography>
                    <IconButton
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='Menu'
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </Fragment>
    );
};

export default MainToolbar;