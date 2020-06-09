import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: '2rem'
    },
    toolbarStyle: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    logoStyle: {
        width: '100%',
        height: 'auto'
    },
    figureStyle: {
        width: '100%',
        height: 'auto'
    },
    figureLinkStyle: {
        width: '12%',
        height: 'auto'
    },
    spacerStyle: {
        flex: 1
    },
    menuTextStyle: {
        paddingRight: '2rem'
    }
}));