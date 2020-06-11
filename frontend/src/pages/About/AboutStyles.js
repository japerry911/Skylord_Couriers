import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    mainGridStyle: {
        minHeight: '900px',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
        'url("https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/About/business-cargo-cargo-container-city-262353.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    headerTextStyle: {
        color: theme.colors.accentLightWhite,
        fontWeight: 'bold'
    },
    subGridContainerStyle: {
        backgroundColor: theme.colors.primaryOrange,
        borderRadius: '12pt',
        padding: '2rem'
    },
    gridItemStyle: {
        padding: '2rem 0'
    },
    bodyTextStyle: {
        fontSize: '1.25rem'
    },
    buttonStyle: {
        width: '20rem',
        height: '5rem',
        borderColor: '#fff',
        borderWidth: '1pt',
        borderStyle: 'solid',
        backgroundColor: theme.colors.accentDarkOrange,
        color: '#fff',
        fontSize: '1.10rem',
        '&:hover': {
            backgroundColor: theme.colors.accentLightOrange
        }
    }
}));