import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles';

const dt = createMuiTheme(); // default theme

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: grey[50],
        },
        secondary: {
            main: teal.A400,
        },
    },
    mixins: {
        drawerWidth: 240,
    },
});

export default theme;
