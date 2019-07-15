module.exports = (data, fields) => {
    const reduceData = item =>
        Object.keys(item)
            .filter(item => fields.includes(item))
            .reduce((accumulator, key) => {
                accumulator[key] = item[key];
                return accumulator;
            }, {});

    if (Array.isArray(data)) {
        return data.map(item => reduceData(item.toJSON ? item.toJSON() : item));
    }

    return reduceData(data.toJSON ? data.toJSON() : data);
};
