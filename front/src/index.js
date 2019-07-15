import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import i18n from './config/initializers/i18n';
import Routes from './config/Routes';
import './config/initializers/moment';
import theme from './config/initializers/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </I18nextProvider>
    </ThemeProvider>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept();
}
