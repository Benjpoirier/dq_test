const MainController = require('../mainController');
const models = require('../../models');
const { visibleFields } = require('./fields');

const { getEntity } = require('../../utils');

module.exports = class UserMiddlewareController extends MainController {
    async beforeAction() {
        this.ctx.state.entity = getEntity(this.ctx);
    }

    async afterAction(method) {
        if (['show', 'index'].includes(method)) {
            this.ctx.body.data = this.parseFields(this.ctx.body.data, visibleFields);
        }
    }

    async index() {
        const { entity } = this.ctx.state;
        const [id] = Object.values(this.ctx.params);
        const usersEntity = await models[entity].findByPk(id, {
            include: {
                model: models.User,
                as: 'users',
            },
        });

        if (usersEntity.users) {
            this.success(usersEntity.users);
        }
    }
};
