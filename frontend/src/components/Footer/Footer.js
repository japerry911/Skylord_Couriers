import React from 'react';
import { useStyles } from './FooterStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NON_AUTH_ROUTES_ARRAY } from '../../router/routesArrays';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.footerStyle}>
            <Grid container item xs={6} sm={6} md={6} lg={6} xl={6} justify='center'>
                <Link
                    to='/'
                    className={classes.logoLinkStyle}
                >
                    <img
                        alt='Skylord Couriers Logo'
                        src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                        className={classes.logoStyle}
                    />
                </Link>
            </Grid>
            <Grid container item xs={6} sm={6} md={6} lg={6} xl={6} justify='center'>
                <List className={classes.listStyle}>
                    {NON_AUTH_ROUTES_ARRAY.map((routeObject, index) => {
                        return (
                            <ListItem
                                key={index}
                                component={Link}
                                to={routeObject.link}
                                className={classes.listItemStyle}
                            >
                                <ListItemIcon><routeObject.Icon /></ListItemIcon>
                                <ListItemText>{routeObject.title}</ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </Grid>
    );
};

export default Footer;