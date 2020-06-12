import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostings } from '../../redux/actions/shipmentActions';
import LoadingOverlay from 'react-loading-overlay';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './PostingsStyles';

const Dashboard = ({ match }) => {
    const classes = useStyles();

    const [tableReadyPostings, setTableReadyPostings] = useState([]);

    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const postings = useSelector(state => state.shipments.postings, []);
    const isLoading = useSelector(state => state.shipments.isLoading);

    useEffect(() => {
        dispatch(getPostings(token));
    }, [dispatch, token]);

    useEffect(() => {
        if (postings.length === 0) {
            setTableReadyPostings([]);
        } else {
            setTableReadyPostings(postings.map(postingObject => {
                const returnObject = {};

                if (postingObject.shipper) {
                    returnObject.shipper = postingObject.shipper.username;
                } else {
                    returnObject.shipper = '';
                }

                if (postingObject.courier) {
                    returnObject.courier = postingObject.courier.username;
                } else {
                    returnObject.courier = '';
                }

                if (postingObject.postDate) {
                    returnObject.postDate = postingObject.postDate;
                } else {
                    returnObject.postDate = '';
                }

                returnObject.status = postingObject.status;
                returnObject.price = postingObject.price;

                return returnObject;
            }));
        }
    }, [postings]);

    return (
        <Fragment>
            <LoadingOverlay
                active={isLoading}
                spinner
                text='Loading...'
            >
                <Grid container className={classes.mainGridStyle} direction='column' alignItems='center'>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridStyle}>
                        <MaterialTable
                            columns={[
                                { title: 'Shipper', field: 'shipper' },
                                { title: 'Courier', field: 'courier' },
                                { title: 'Post Date', field: 'postDate' },
                                { title: 'Status', field: 'status' },
                                { title: 'Price', field: 'price' }
                            ]}
                            data={tableReadyPostings}
                            title='Postings Board'
                        />
                    </Grid>
                </Grid>
            </LoadingOverlay>
        </Fragment>
    );
};

export default Dashboard;