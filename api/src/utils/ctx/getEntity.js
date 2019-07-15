const { singular } = require('pluralize');

module.exports = ctx => {
    const childEntity = singular(ctx.url.split('/')[1]);
    return childEntity[0].toUpperCase() + childEntity.substr(1);
};
