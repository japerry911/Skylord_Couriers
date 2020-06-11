import React from 'react';
import { useStyles } from './PostingsStyles';

const Dashboard = ({ match }) => {
    const classes = useStyles();

    return (
        <div>
            <h1>Postings - {match.params.type}</h1>
        </div>
    );
};

export default Dashboard;