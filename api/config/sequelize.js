const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, 'database'))[env];
const modelsPath = path.join(__dirname, '..', 'src', 'models');
const { database, username, password, ...options } = config;

const db = new Sequelize(database, username, password, options);

let models = {};

fs.readdirSync(modelsPath)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            !['index.js'].includes(file)
        );
    })
    .forEach(file => {
        const model = db.import(path.join(modelsPath, file));
        models[model.name] = model;
    });

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = db;
