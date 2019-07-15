import { useContext } from 'react';
import { __RouterContext } from 'react-router';

export default () => {
    const context = useContext(__RouterContext);
    return context;
};
