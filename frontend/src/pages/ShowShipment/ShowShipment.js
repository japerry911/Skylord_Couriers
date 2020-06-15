import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipment } from '../../redux/actions/shipmentActions';
import LoadingOverlay from 'react-loading-overlay';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
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
                        <Grid xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.contentGridContainerStyle}>
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
                                    Status: <br /><strong>{showShipment.status}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Posted Date - <br /><strong>{showShipment.postDate ? showShipment.postDate.substring(0, 10) : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Shipper - <br /><strong>{showShipment.shipper ? showShipment.shipper.username : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Courier - <br /><strong>{showShipment.courier ? showShipment.courier.username : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Start Date - <br /><strong>{showShipment.startDate ? showShipment.startDate.substring(0, 10) : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Delivered Date - <br /><strong>{showShipment.deliveredDate ? showShipment.deliveredDate.substring(0, 10) : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Comment(s) - <br /><strong>{showShipment.comments ? showShipment.comments : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='body1'
                                    className={classes.textStyle}
                                >
                                    Price - <br /><strong>${showShipment.price ? showShipment.price : 'n/a'}</strong>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.tableGridStyle}>
                            <MaterialTable
                                columns={[
                                    { title: 'Good Name', field: 'name' },
                                    { title: 'Weight (lbs)', field: 'weight' }
                                ]}
                                data={showShipment.goods}
                                title='Shipping Goods Table'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </LoadingOverlay>
        </Fragment>
    );
};

export default ShowShipment;