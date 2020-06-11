import React from 'react';
import { useStyles } from './MainDrawerStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NON_AUTH_ROUTES_ARRAY } from '../../router/routesArrays';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainDrawer = ({ open, onClose, setTitle }) => {
    const classes = useStyles();
    
    const auth = useSelector(state => state.user.auth);
    const user = useSelector(state => state.user.user);
    console.log(user);

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
                {NON_AUTH_ROUTES_ARRAY.map((routeObject, index) => {
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
            </List>
        </Drawer>
    );
};

export default MainDrawer;