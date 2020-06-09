import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './HomeStyles';

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainGridStyle} direction='column' alignItems='center' justify='space-evenly'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                <img
                    alt='Skylord Couriers Logo'
                    src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                    className={classes.logoStyle}
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                    <Button
                        className={classes.buttonStyle}
                    >
                        About Us
                    </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                    <Button
                        className={classes.buttonStyle}
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;