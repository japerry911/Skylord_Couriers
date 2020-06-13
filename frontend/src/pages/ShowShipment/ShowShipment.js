import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipment } from '../../redux/actions/shipmentActions';
import LoadingOverlay from 'react-loading-overlay';
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
    }, [dispatch, token]);

    return (
        <Fragment>
            <LoadingOverlay
                active={isLoading}
                spinner
                text='Loading...'
            >
                <div>   
                    <h1>Shipment - {match.params.id}</h1>
                </div>
            </LoadingOverlay>
        </Fragment>
    );
};

export default ShowShipment;