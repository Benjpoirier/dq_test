const MainController = require('../mainController');
const { Company } = require('../../models');
const { editableFields, visibleFields } = require('./fields');

module.exports = class CompanyController extends MainController {
    async beforeAction(method) {
        if (['create', 'update'].includes(method)) {
            this.ctx.request.body = this.parseFields(this.ctx.request.body, editableFields);
        }
    }

    async index() {
        const companies = await Company.findAll({ attributes: visibleFields });

        this.success(companies);
    }

    async show() {
        const { companyId } = this.ctx.params;
        const company = await Company.findByPk(companyId, { attributes: visibleFields });

        if (company) {
            this.success(company);
        }
    }

    async create() {
        const { body } = this.ctx.request;

        const company = await Company.create(body, { attributes: visibleFields });

        this.success(company);
    }

    async update() {
        const { companyId } = this.ctx.params;
        const { body } = this.ctx.request;

        const company = await Company.update(body, {
            where: { id: companyId },
            attributes: visibleFields,
        });

        if (company) {
            this.success(company);
        }
    }

    async delete() {
        const { companyId } = this.ctx.params;

        const company = await Company.destroy({ where: { id: companyId } });

        if (company) {
            this.success();
        }
    }
};
