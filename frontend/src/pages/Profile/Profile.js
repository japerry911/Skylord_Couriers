import React from 'react';
import { useStyles } from './ProfileStyles';

const Dashboard = ({ match }) => {
    const classes = useStyles();

    return (
        <div>
            <h1>Profile - {match.params.type}</h1>
        </div>
    );
};

export default Dashboard;