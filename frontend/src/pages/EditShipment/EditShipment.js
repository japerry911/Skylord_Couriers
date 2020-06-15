import React from 'react';
import { useStyles } from './EditShipmentStyles';

const EditShipment = ({ match }) => {
    const classes = useStyles();

    return (
        <div>
            <h1>Edit Shipment - {match.params.id}</h1>
        </div>
    );
};

export default EditShipment;