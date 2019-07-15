import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../contexts';

const LayoutProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
            }}>
            {children}
        </UserContext.Provider>
    );
};
LayoutProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutProvider;
