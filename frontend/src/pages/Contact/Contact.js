import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { useStyles } from './ContactStyles';

const Contact = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [validateStatus, setValidateStatus] = useState(false);

    useEffect(() => {
        const emailRegexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        setValidateStatus(subject && message && emailRegexp.test(email));
    }, [email, subject, message]);

    return (
        <Grid container className={classes.mainGridStyle} direction='column' alignItems='center' justify='space-evenly'>
            <Grid container item xs={8} sm={8} md={8} lg={8} xl={8} alignItems='center' direction='column' className={classes.subGridContainerStyle}>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                    <Typography
                        variant='h3'
                        className={classes.headerTextStyle}
                    >
                        Contact Skylord Couriers
                    </Typography>
                </Grid>
                <Grid container item xs={10} sm={10} md={12} lg={10} xl={10} align='center' className={classes.gridItemStyle} direction='column' alignItems='center'>
                    <form className={classes.formContainerStyle}>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <TextField
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label='Email'
                                className={classes.formFieldStyle}
                                type='email'
                            />
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <TextField
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                label='Subject'
                                className={classes.formFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <TextareaAutosize
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                label='Your Message...'
                                rowsMin={5}
                                className={classes.formFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} align='center' className={classes.gridItemStyle}>
                            <Button
                                type='submit'
                                className={classes.buttonStyle}
                                disabled={!validateStatus}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contact;