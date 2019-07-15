import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LayoutContext } from '../contexts';

const LayoutProvider = ({ children }) => {
    const [layoutSettings, setLayoutSettings] = useState({
        drawerOpen: true,
        currentMenuIndex: 0,
    });

    return (
        <LayoutContext.Provider
            value={{
                layoutSettings,
                setLayoutSettings,
            }}>
            {children}
        </LayoutContext.Provider>
    );
};
LayoutProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutProvider;
