import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import DomainIcon from '@material-ui/icons/Domain';
import MaterialDrawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core';
import useReactRouter from '../../hooks/useReactRouter';
import { LayoutContext } from '../../contexts';
import MenuList from '../../components/MenuList';
import PropTypes from 'prop-types';

import style from './style';
import { useTranslation } from 'react-i18next';

const Drawer = ({ active }) => {
    const classes = makeStyles(style)();
    const { layoutSettings, setLayoutSettings } = useContext(LayoutContext);
    const { t } = useTranslation('common');
    const { history } = useReactRouter();

    const handleDrawerClose = () => {
        setLayoutSettings(prevState => ({
            ...prevState,
            drawerOpen: !prevState.drawerOpen,
        }));
    };

    const handleClick = to => {
        console.log(history);
        // history.pushState(to);
    };

    const menu = [
        {
            text: t('menu.users'),
            Icon: PeopleIcon,
            to: '/',
        },
        {
            text: t('menu.companies'),
            Icon: DomainIcon,
            to: 'companies',
        },
        {
            text: t('menu.teams'),
            Icon: GroupWorkIcon,
            to: 'teams',
        },
    ];

    return (
        <MaterialDrawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={layoutSettings.drawerOpen}
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <MenuList items={menu} active={active} handleClick={handleClick} />
        </MaterialDrawer>
    );
};

Drawer.propTypes = {
    active: PropTypes.number.isRequired,
};

export default Drawer;
