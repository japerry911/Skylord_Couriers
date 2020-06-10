import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    mainGridStyle: {
        minHeight: '900px',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
            'url("https://skylord-couriers-12395823838.s3.us-east-2.amazonaws.com/SignIn/white-dump-truck-near-pine-tress-during-daytime-93398.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    },
    buttonStyle: {
        width: '10rem',
        height: '5rem',
        borderColor: '#000',
        borderWidth: '1pt',
        borderStyle: 'solid',
        backgroundColor: theme.colors.primaryOrange,
        color: '#000',
        fontSize: '1.10rem',
        '&:hover': {
            backgroundColor: theme.colors.accentLightOrange
        }
    },
    logoStyle: {
        width: '60%',
        height: 'auto'
    }
}));