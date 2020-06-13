import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipment } from '../../redux/actions/shipmentActions';
import LoadingOverlay from 'react-loading-overlay';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './ShowShipmentStyles';

const ShowShipment = ({ match }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.shipments.isLoading);
    const showShipment = useSelector(state => state.shipments.showShipment);
    const error = useSelector(state => state.shipments.error);
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        dispatch(getShipment(token, match.params.id));
    }, [dispatch, token, match.params.id]);

    return (
        <Fragment>
            <LoadingOverlay
                active={isLoading}
                spinner
                text='Loading...'
            >
                <Grid container className={classes.mainGridStyle} direction='column' alignItems='center' justify='space-evenly'>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align='center' className={classes.gridItemStyle}>
                        <img
                            alt='Skylord Couriers Logo'
                            src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
                            className={classes.logoStyle}
                        />
                    </Grid>
                    <Grid container item xs={8} sm={8} md={8} lg={8} xl={8} alignItems='center' direction='column' className={classes.subGridContainerStyle}>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='h6'
                                className={classes.headerTextStyle}
                            >
                                Shipment #{match.params.id}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Status - {showShipment.status}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Posted Date - {showShipment.postDate ? showShipment.postDate.substring(0, 10) : 'n/a'}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Shipper - {showShipment.shipper ? showShipment.shipper.username : 'n/a'}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Courier - {showShipment.courier ? showShipment.courier.username : 'n/a'}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Start Date - {showShipment.startDate ? showShipment.startDate.substring(0, 10) : 'n/a'}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Delivered Date - {showShipment.deliveredDate ? showShipment.deliveredDate.substring(0, 10) : 'n/a'}
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Typography
                                variant='body1'
                                className={classes.textStyle}
                            >
                                Comment(s) - {showShipment.comments ? showShipment.comments : 'n/a'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </LoadingOverlay>
        </Fragment>
    );
};

export default ShowShipment;