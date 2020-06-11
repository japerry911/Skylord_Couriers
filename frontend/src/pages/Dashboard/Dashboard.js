import React from 'react';
import { useStyles } from './DashboardStyles';

const Dashboard = ({ match }) => {
    const classes = useStyles();

    return (
        <div>
            <h1>Dashboard - {match.params.type}</h1>
        </div>
    );
};

export default Dashboard;