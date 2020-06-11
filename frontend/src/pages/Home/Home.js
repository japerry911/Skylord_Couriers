import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './HomeStyles';
import { useSelector } from 'react-redux';

const Home = ({ history }) => {
    const classes = useStyles();

    const authed = useSelector(state => state.user.authed);
    const user = useSelector(state => state.user.user);

    return (
        <Grid container className={classes.mainGridStyle} direction='column' alignItems='center' justify='space-evenly'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                <img
                    alt='Skylord Couriers Logo'
                    src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
                    className={classes.logoStyle}
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                    <Button
                        className={classes.buttonStyle}
                        onClick={() => history.push('/about')}
                    >
                        About Us
                    </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                    {authed && user.isShipper
                    ?
                    <Button
                        className={classes.buttonStyle}
                        onClick={() => history.push('/shipper/dashboard')}
                    >
                        Go to Dashboard
                    </Button>
                    :
                    authed && user.isCourier 
                    ?
                    <Button
                        className={classes.buttonStyle}
                        onClick={() => history.push('/courier/dashboard')}
                    >
                        Go to Dashboard
                    </Button>
                    :
                    <Button
                        className={classes.buttonStyle}
                        onClick={() => history.push('/sign-in-sign-up')}
                    >
                        Sign In
                    </Button>}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;