import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    footerStyle: {
        backgroundColor: theme.colors.primaryOrange,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    logoLinkStyle: {
        width: '30%',
        height: 'auto'
    },
    logoStyle: {
        width: '100%',
        height: 'auto'
    },
    listItemStyle: {
        width: '50%',
        color: '#000',
        '&:hover': {
            backgroundColor: theme.colors.accentLightGray
        },
        height: '2.25rem'
    },
    listStyle: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));