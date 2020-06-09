import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
    toolbarStyle: {
        display: 'flex',
        justifyContent: 'center'
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
    }
}));