const MainController = require('../mainController');
const { User } = require('../../models');
const { editableFields, visibleFields } = require('./fields');

module.exports = class UserController extends MainController {
    async beforeAction(method) {
        if (['create', 'update'].includes(method)) {
            this.ctx.request.body = this.parseFields(this.ctx.request.body, editableFields);
        }
    }

    async index() {
        const users = await User.findAll({ attributes: visibleFields });

        this.success(users);
    }

    async show() {
        const { userId } = this.ctx.params;
        const user = await User.findByPk(userId, { attributes: visibleFields });

        if (user) {
            this.success(user);
        }
    }

    async create() {
        const { body } = this.ctx.request;

        const user = await User.create(body, { attributes: visibleFields });

        this.success(user);
    }

    async update() {
        const { userId } = this.ctx.params;
        const { body } = this.ctx.request;

        const user = await User.update(body, { where: { id: userId }, attributes: visibleFields });

        if (user) {
            this.success(user);
        }
    }

    async delete() {
        const { userId } = this.ctx.params;

        const user = await User.destroy({ where: { id: userId } });

        if (user) {
            this.success();
        }
    }
};
