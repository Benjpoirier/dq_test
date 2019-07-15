import React, { useContext } from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { LayoutContext } from '../../contexts';

import style from './style';

const AppBar = () => {
    const classes = makeStyles(style)();
    const { layoutSettings, setLayoutSettings } = useContext(LayoutContext);

    const handleDrawerOpen = () => {
        setLayoutSettings(prevState => ({
            ...prevState,
            drawerOpen: !prevState.drawerOpen,
        }));
    };

    return (
        <MaterialAppBar
            position="fixed"
            className={classnames(classes.appBar, {
                [classes.appBarShift]: layoutSettings.drawerOpen,
            })}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={classnames(classes.menuButton, {
                        [classes.hide]: layoutSettings.drawerOpen,
                    })}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    App
                </Typography>
            </Toolbar>
        </MaterialAppBar>
    );
};

export default AppBar;
