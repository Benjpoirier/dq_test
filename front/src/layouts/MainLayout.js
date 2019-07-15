import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../containers/AppBar';
import Drawer from '../containers/Drawer';
import LayoutProvider from '../providers/LayoutProvider';
import Main from '../components/Main';

const MainLayout = ({ children, active }) => {
    return (
        <LayoutProvider>
            <AppBar />
            <Drawer active={active} />
            <Main>{children}</Main>
        </LayoutProvider>
    );
};

MainLayout.propTypes = {
    active: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default MainLayout;
