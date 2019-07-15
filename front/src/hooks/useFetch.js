import { useState, useEffect } from 'react';
import { call } from '../utils';

export default (url, options) => {
    const [data, setData] = useState(null);

    const remove = index => {
        setData(prevData => {
            prevData.splice(index, 1);
            return [...prevData];
        });
    };

    const add = data => {
        setData(prevData => [...prevData, data]);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await call(url, options);
            setData(data);
        };
        fetchData();
    }, []);

    return { data, remove, add, call };
};
