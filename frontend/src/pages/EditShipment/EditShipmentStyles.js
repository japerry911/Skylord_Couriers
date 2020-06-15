import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    mainGridStyle: {
        minHeight: '900px',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
            'url("https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/ShowShipment/leone-venter-mTkXSSScrzw-unsplash.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    },
    subGridContainerStyle: {
        backgroundColor: theme.colors.accentLightOrange,
        borderRadius: '12pt',
        padding: '2rem',
        minHeight: '600px'
    },
    gridItemStyle: {
        padding: '2rem 0'
    },
    headerTextStyle: {
        color: '#000',
        fontWeight: 'bold'
    },
    textStyle: {
        color: '#000'
    },
    contentGridContainerStyle: {
        width: '85%',
        backgroundColor: theme.colors.accentLightGray,
        borderRadius: '12pt',
        padding: '2rem',
        minHeight: '600px'
    },
    logoStyle: {
        height: 'auto',
        width: '25%'
    },
    formContainerStyle: {
        width: '100%'
    },
    formControlStyle: {
        width: '80%'
    }
}));