import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F67743'
        },
        secondary: {
            main: '#818080'
        }
    },
    colors: {
        primaryOrange: '#F67743',
        accentDarkOrange: '#AC532E',
        accentLightGray: '#ECEBEA',
        accentLightOrange: '#FCB294',
        accentLightWhite: '#F9F6F6',
        accentMedGray: '#818080'
    }
});

theme = responsiveFontSizes(theme);

export default theme;