const { CoreController } = require('koa-clapp');
const { parseFields } = require('../utils');

module.exports = class MainController extends CoreController {
    constructor(options) {
        super(options);
        this.parseFields = parseFields;
    }

    success(data) {
        if (data) {
            this.ctx.body = {
                data,
            };
            this.ctx.status = 200;
        } else {
            this.ctx.status = 204;
        }
    }
};
