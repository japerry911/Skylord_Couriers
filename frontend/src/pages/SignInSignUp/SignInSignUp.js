import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from './SignInSignUpStyles';

const SignInSignUp = () => {
    const classes = useStyles();

    const [signInDialogOpen, setSignInDialogOpen] = useState(false);
    const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isShipper, setIsShipper] = useState(false);
    const [isCourier, setIsCourier] = useState(false);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const onSignInDialogOpen = () => {
        setSignInDialogOpen(true);
    };

    const onSignInDialogClose = () => {
        setSignInDialogOpen(false);
        setUsername('');
        setPassword('');
    };

    const onSignUpDialogOpen = () => {
        setSignUpDialogOpen(true);
    };

    const onSignUpDialogClose = () => {
        setSignUpDialogOpen(false);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setIsShipper('');
        setIsCourier('');
        setCity('');
        setState('');
    };

    return (
        <Grid container className={classes.mainGridStyle} direction='column' justify='space-evenly' alignItems='center'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                <img
                    alt='Skylord Couriers Logo'
                    src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
                    className={classes.logoStyle}
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justify='center'>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Button
                        className={classes.buttonStyle}
                        onClick={onSignInDialogOpen}
                    >
                        Sign In
                    </Button>
                    <Dialog open={signInDialogOpen} onClose={onSignInDialogClose} disableScrollLock disablePortal>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='normal'
                                label='Username'
                                InputProps={{ name: 'username' }}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin='normal'
                                label='Password'
                                InputProps={{ name: 'password' }}
                                value={password}
                                fullWidth
                                onChange={e => setPassword(e.target.value)}
                                type='password'
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onSignInDialogClose} color='primary'>
                                Go Back
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => alert('Put Action Here')}
                            >
                                Sign In
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} align='center'>
                    <Button
                        className={classes.buttonStyle}
                        onClick={onSignUpDialogOpen}
                    >
                        Sign Up
                    </Button>
                    <Dialog open={signUpDialogOpen} onClose={onSignUpDialogOpen} disableScrollLock disablePortal>
                        <DialogTitle>Sign Up</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='normal'
                                label='Username'
                                InputProps={{ name: 'username' }}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin='normal'
                                label='Password'
                                InputProps={{ name: 'password' }}
                                value={password}
                                fullWidth
                                onChange={e => setPassword(e.target.value)}
                                type='password'
                            />
                            <TextField
                                autoFocus
                                margin='normal'
                                label='Confirm Password'
                                InputProps={{ name: 'confirmPassword' }}
                                value={confirmPassword}
                                fullWidth
                                onChange={e => setConfirmPassword(e.target.value)}
                                type='password'
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isShipper}
                                        onChange={e => setIsShipper(e.target.checked)}
                                        color='primary'
                                    />
                                }
                                label='Shipper?'
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isCourier}
                                        onChange={e => setIsCourier(e.target.checked)}
                                        color='primary'
                                    />
                                }
                                label='Courier?'
                            />
                            <TextField
                                autoFocus
                                margin='normal'
                                label='City'
                                InputProps={{ name: 'city' }}
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin='normal'
                                label='State'
                                InputProps={{ name: 'state' }}
                                value={state}
                                onChange={e => setState(e.target.value)}
                                fullWidth
                                inputProps={{ maxLength: 2 }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onSignUpDialogClose} color='primary'>
                                Go Back
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => alert('Put Action Here')}
                            >
                                Sign Up
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignInSignUp;