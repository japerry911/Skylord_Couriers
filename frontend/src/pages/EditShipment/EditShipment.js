import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipment } from '../../redux/actions/shipmentActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoadingOverlay from 'react-loading-overlay';
import { getOtherUsers } from '../../redux/actions/userActions';
import { useStyles } from './EditShipmentStyles';

const EditShipment = ({ match }) => {
    const classes = useStyles();

    const [shipperUsers, setShipperUsers] = useState([]);
    const [courierUsers, setCourierUsers] = useState([]);

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading);
    const error = useSelector(state => state.user.error);
    const token = useSelector(state => state.user.token);
    const showShipment = useSelector(state => state.shipments.showShipment);
    const userId = useSelector(state => state.user.user._id);

    useEffect(() => {
        dispatch(getOtherUsers(token, userId));
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
                        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.contentGridContainerStyle}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                <Typography
                                    variant='h6'
                                    className={classes.headerTextStyle}
                                >
                                    Updates for Shipment #{match.params.id}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </LoadingOverlay>
        </Fragment>
    );
};

export default EditShipment;