import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';

import { LayoutContext } from '../../contexts';
import style from './style';

const Main = ({ children }) => {
    const classes = makeStyles(style)();
    const { layoutSettings } = useContext(LayoutContext);

    return (
        <div
            className={classnames(classes.content, {
                [classes.contentShift]: layoutSettings.drawerOpen,
            })}>
            <div className={classes.drawerHeader}></div>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;

{
    /* <main
className={clsx(classes.content, {
  [classes.contentShift]: open,
})}
>
<div className={classes.drawerHeader} /> */
}
