import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    mainGridStyle: {
        minHeight: '900px',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
        'url("https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/Contact/andre-boysen-GWWHCY3K-U0-unsplash+(2).jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));