import React from 'react';
import { useStyles } from './FooterStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerStyle}>
            <List>
                <ListItem>
                    <ListItemText>Test2</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Test2</ListItemText>
                </ListItem>
            </List>
            <div className={classes.spacerStyle} />
            <figure className={classes.figureLogoStyle}>
                <img
                    alt='Skylord Couriers Logo'
                    src='https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Logos/dark_logo_transparent_background.png'
                    className={classes.logoStyle}
                />
            </figure>
        </div>
    );
};

export default Footer;