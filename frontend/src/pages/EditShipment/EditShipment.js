import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipment, updateShipment } from '../../redux/actions/shipmentActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoadingOverlay from 'react-loading-overlay';
import { getOtherUsers } from '../../redux/actions/userActions';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { DateTimePicker } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { handleOpen } from '../../redux/actions/toastActions';
import { useStyles } from './EditShipmentStyles';

const EditShipment = ({ match, history }) => {
    const classes = useStyles();

    const [courier, setCourier] = useState('');
    const [shipper, setShipper] = useState('');
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [deliveredDate, setDeliveredDate] = useState(new Date());
    const [price, setPrice] = useState(0);
    const [comments, setComments] = useState('');
    const [validation, setValidation] = useState(false);

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
        setPrice(showShipment.price);
        setComments(showShipment.comments);
        if (showShipment.courier) setCourier(JSON.stringify(showShipment.courier));
        if (showShipment.shipper) setShipper(JSON.stringify(showShipment.shipper));
        if (showShipment.startDate) setStartDate(showShipment.startDate);
        if (showShipment.deliveredDate) setDeliveredDate(showShipment.deliveredDate);
    }, [showShipment]);

    useEffect(() => {
        setValidation(status && price);
    }, [status, price]);

    const handleSubmit = async event => {
        event.preventDefault();

        const shipmentId = showShipment._id;
        const updateShipmentObject = {};

        updateShipmentObject.price = price;
        updateShipmentObject.comments = comments;
        updateShipmentObject.goodIds = showShipment.goods.filter(goodObject => goodObject._id).map(goodObject => goodObject._id);
        if (courier) updateShipmentObject.courierId = JSON.parse(courier)._id;
        if (shipper) updateShipmentObject.shipperId = JSON.parse(shipper)._id;
        if (startDate) updateShipmentObject.startDate = startDate;
        if (deliveredDate) updateShipmentObject.deliveredDate = deliveredDate;
        if (status) updateShipmentObject.status = status;
        console.log(shipmentId);
        try {
            await dispatch(updateShipment(token, shipmentId, updateShipmentObject));
         
            dispatch(handleOpen({ type: 'success', message: 'Shipment Updated!' }));
            history.push(`/${match.params.type}/shipments/${match.params.id}`);
        } catch (error) {
            dispatch(handleOpen({ type: 'error', message: `Error: ${error}` }));
        }
    };

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
                                <form className={classes.formContainerStyle} onSubmit={handleSubmit}>
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
                                                        <option key={shipper._id} value={JSON.stringify(shipper)}>{shipper.username}</option>
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
                                                {couriers.map(courier => {
                                                    return (
                                                        <option key={courier._id} value={JSON.stringify(courier)}>{courier.username}</option>
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
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <DateTimePicker
                                                label='Posted Date'
                                                value={showShipment.postDate}
                                                disabled
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <DateTimePicker
                                                autoOk
                                                label='Start Date'
                                                clearable
                                                value={startDate}
                                                onChange={setStartDate}
                                                disableFuture
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <DateTimePicker
                                                autoOk
                                                label='Delivered Date'
                                                clearable
                                                value={deliveredDate}
                                                onChange={setDeliveredDate}
                                                disableFuture
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <TextField
                                                label='Price'
                                                value={price}
                                                type='number'
                                                onChange={e => setPrice(e.target.value)}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <FormControl className={classes.formControlStyle}>
                                            <TextareaAutosize
                                                label='Comment(s)'
                                                value={comments}
                                                onChange={e => setComments(e.target.value)}
                                                rowsMin={5}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12} xl={12} align='center' className={classes.gridItemStyle}>
                                        <Button
                                            variant='contained'
                                            disabled={!validation}
                                            type='submit'
                                        >
                                            Submit Edits
                                        </Button>
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