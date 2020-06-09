import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    footerStyle: {
        backgroundColor: theme.colors.primaryOrange,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    figureLogoStyle: {
        width: '12%',
        height: 'auto'
    },
    logoStyle: {
        width: '100%',
        height: 'auto'
    },
    spacerStyle: {
        flex: 1
    }
}));