import React from 'react';
import { useStyles } from './MainDrawerStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NON_AUTH_ROUTES_ARRAY, AUTH_SHIPPER_ROUTES_ARRAY, AUTH_COURIER_ROUTES_ARRAY } from '../../router/routesArrays';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { userSignOut } from '../../redux/actions/userActions';

const MainDrawer = ({ open, onClose, setTitle }) => {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const authed = useSelector(state => state.user.authed);
    const user = useSelector(state => state.user.user);

    return (
        <Drawer 
            classes={{
                paper: classes.drawerStyle
            }}
            variant='temporary' 
            open={open} 
            onClose={onClose}
        >
            <List>
                {authed && user.isShipper
                ?
                AUTH_SHIPPER_ROUTES_ARRAY.map((routeObject, index) => {
                    return (
                        <ListItem
                            key={index}
                            button
                            onClick={() => {
                                setTitle(routeObject.title);
                                onClose();
                            }}
                            component={Link}
                            to={routeObject.link}
                        >
                            <ListItemIcon><routeObject.Icon /></ListItemIcon>
                            <ListItemText>{routeObject.title}</ListItemText>
                        </ListItem>
                    );
                })
                :
                authed && user.isCourier
                ?
                AUTH_COURIER_ROUTES_ARRAY.map((routeObject, index) => {
                    return (
                        <ListItem
                            key={index}
                            button
                            onClick={() => {
                                setTitle(routeObject.title);
                                onClose();
                            }}
                            component={Link}
                            to={routeObject.link}
                        >
                            <ListItemIcon><routeObject.Icon /></ListItemIcon>
                            <ListItemText>{routeObject.title}</ListItemText>
                        </ListItem>
                    );
                })
                :
                NON_AUTH_ROUTES_ARRAY.map((routeObject, index) => {
                    return (
                        <ListItem
                            key={index}
                            button
                            onClick={() => {
                                setTitle(routeObject.title);
                                onClose();
                            }}
                            component={Link}
                            to={routeObject.link}
                        >
                            <ListItemIcon><routeObject.Icon /></ListItemIcon>
                            <ListItemText>{routeObject.title}</ListItemText>
                        </ListItem>
                    );
                })}
                {authed
                ?
                <ListItem
                    button
                    onClick={() => dispatch(userSignOut())}
                    component={Link}
                    to={'/'}
                >
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText>Sign Out</ListItemText>
                </ListItem>
                :
                null}
            </List>
        </Drawer>
    );
};

export default MainDrawer;