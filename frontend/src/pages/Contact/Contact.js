import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './ContactStyles';

const Contact = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.mainGridStyle} direction='column' alignItems='center' justify='space-evenly'></Grid>
    );
};

export default Contact;