import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipment } from '../../redux/actions/shipmentActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoadingOverlay from 'react-loading-overlay';
import { getOtherUsers } from '../../redux/actions/userActions';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useStyles } from './EditShipmentStyles';

const EditShipment = ({ match }) => {
    const classes = useStyles();

    const [courier, setCourier] = useState('');
    const [shipper, setShipper] = useState('');
    const [status, setStatus] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading);
    const error = useSelector(state => state.user.error);
    const token = useSelector(state => state.user.token);
    const showShipment = useSelector(state => state.shipments.showShipment);
    const userId = useSelector(state => state.user.user._id);
    const couriers = useSelector(state => state.user.couriers);
    const shippers = useSelector(state => state.user.shippers);

    useEffect(() => {
        dispatch(getOtherUsers(token, userId));
        dispatch(getShipment(token, match.params.id));
    }, [dispatch, token, match.params.id]);

    useEffect(() => {
        setStatus(showShipment.status);
        if (showShipment.courier) setCourier(showShipment.courier._id);
        if (showShipment.shipper) setShipper(showShipment.shipper._id);
    }, [showShipment]);
        
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
                            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                                <form className={classes.formContainerStyle}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <InputLabel shrink htmlFor='shipper-select'>
                                                Shipper:
                                            </InputLabel>
                                            <NativeSelect
                                                value={shipper}
                                                onChange={e => setShipper(e.target.value)}
                                                name='Shipper'
                                                inputProps={{ name: 'Shipper', id: 'shipper-select' }}
                                            >
                                                {shippers.map(shipper => {
                                                    return (
                                                        <option key={shipper._id} value={shipper._id}>{shipper.username}</option>
                                                    );
                                                })}
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>       
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <InputLabel shrink htmlFor='courier-select'>
                                                Courier:
                                            </InputLabel>
                                            <NativeSelect
                                                value={courier}
                                                onChange={e => setCourier(e.target.value)}
                                                name='Courier'
                                                inputProps={{ name: 'Courier', id: 'courier-select' }}
                                            >
                                                {shippers.map(courier => {
                                                    return (
                                                        <option key={courier._id} value={courier._id}>{courier.username}</option>
                                                    );
                                                })}
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid> 
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <InputLabel shrink htmlFor='status-select'>
                                                Status:
                                            </InputLabel>
                                            <NativeSelect
                                                value={status}
                                                onChange={e => setStatus(e.target.value)}
                                                name='Status'
                                                inputProps={{ name: 'Status', id: 'status-select' }}
                                            >
                                                {['Not Claimed', 'Pending Delivery', 'Successful Delivery', 'Failed Delivery'].map((statusOption, index) => {
                                                    return (
                                                        <option key={index} value={statusOption}>{statusOption}</option>
                                                    );
                                                })}
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>
                                </form>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </LoadingOverlay>
        </Fragment>
    );
};

export default EditShipment;