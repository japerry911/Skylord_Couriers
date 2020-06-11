import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './AboutStyles';

const About = ({ history }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainGridStyle} direction='column' alignItems='center' justify='space-evenly'>
            <Grid container item xs={8} sm={8} md={8} lg={8} xl={8} alignItems='center' direction='column' className={classes.subGridContainerStyle}>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                    <Typography
                        variant='h3'
                        className={classes.headerTextStyle}
                    >
                        About Skylord Couriers
                    </Typography>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                    <Typography
                        variant='body1'
                        className={classes.bodyTextStyle}
                        paragraph
                    >
                        Skylord Couriers was established in June 2020. The courier service has the goal of connecting Shippers and Couriers together on a
                        centralized network. This network has a great user experience and it is easy for both, the Shipper and the Courier, to connect and
                        complete shipments. Skylord Couriers was developed by Jack and Skylord with the vision of creating a premium service that promotes
                        fast, efficient shipments, while also providing jobs to thousands of Couriers.
                    </Typography>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                    <Button
                        onClick={() => history.push('/sign-in-sign-up')}
                        className={classes.buttonStyle}
                    >
                        Sign Up For Skylord Couriers
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;