import React from 'react';
import { useStyles } from './ShowShipmentStyles';

const ShowShipment = ({ match }) => {
    const classes = useStyles();

    return (
        <div>
            <h1>Shipment - {match.params.id}</h1>
        </div>
    );
};

export default ShowShipment;